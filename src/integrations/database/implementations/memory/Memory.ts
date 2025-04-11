
import { LogicalOperators, QueryOperators, SortDirections } from '../../definitions/constants';
import type { Driver } from '../../definitions/interfaces';
import type { QueryExpression, QueryMultiExpressionStatement, QueryOperator, QuerySingleExpressionStatement, QueryStatement, RecordData, RecordField, RecordQuery, RecordSort, RecordValue } from '../../definitions/types';
import NotConnected from '../../errors/NotConnected';
import RecordNotFound from '../../errors/RecordNotFound';
import RecordNotUpdated from '../../errors/RecordNotUpdated';

type FilterFunction = (record: RecordData) => boolean;

const OPERATORS =
{
    [QueryOperators.EQUALS]: '==',
    [QueryOperators.GREATER_THAN]: '>',
    [QueryOperators.GREATER_THAN_OR_EQUALS]: '>=',
    [QueryOperators.LESS_THAN]: '<',
    [QueryOperators.LESS_THAN_OR_EQUALS]: '<=',
    [QueryOperators.NOT_EQUALS]: '!=',
};

const LOGICAL_OPERATORS =
{
    [LogicalOperators.AND]: '&&',
    [LogicalOperators.OR]: '||'
};

export default class Memory implements Driver
{
    readonly #memory = new Map<string, RecordData[]>();
    #connected = false;
    recordId = 0;

    get connected() { return this.#connected; }

    async connect(): Promise<void>
    {
        this.#connected = true;
    }

    async disconnect(): Promise<void>
    {
        this.#connected = false;
    }

    async createRecord(type: string, data: RecordData): Promise<string>
    {
        const collection = this.#getCollection(type);

        const record = data.id === undefined
            ? { id: this.#createId(), ...data }
            : data;

        collection.push(record);

        return record.id as string;
    }

    async readRecord(type: string, id: string, fields?: string[]): Promise<RecordData>
    {
        const record = this.#fetchRecord(type, id);

        if (record === undefined)
        {
            throw new RecordNotFound();
        }

        return this.#buildRecordData(record, fields);
    }

    async findRecord(type: string, query: QueryStatement, fields?: string[], sort?: RecordSort): Promise<RecordData | undefined>
    {
        const result = await this.searchRecords(type, query, fields, sort, 1, 0);

        return result[0];
    }

    async searchRecords(type: string, query: QueryStatement, fields?: string[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>
    {
        const records = this.#fetchRecords(type, query);

        const sortedRecords = this.#sortRecords(records, sort);
        const limitedRecords = this.#limitNumberOfRecords(sortedRecords, offset, limit);

        return limitedRecords.map(record => this.#buildRecordData(record, fields));
    }

    async updateRecord(type: string, id: string, data: RecordData): Promise<void>
    {
        const record = this.#fetchRecord(type, id);

        if (record === undefined)
        {
            throw new RecordNotUpdated();
        }

        this.#updateRecordData(record, data);
    }

    async updateRecords(type: string, query: QueryStatement, data: RecordData): Promise<void>
    {
        const records = this.#fetchRecords(type, query);

        records.forEach(record => this.#updateRecordData(record, data));
    }

    async deleteRecord(type: string, id: string): Promise<void>
    {
        const collection = this.#getCollection(type);
        const index = collection.findIndex(record => record.id === id);

        if (index === -1)
        {
            throw new RecordNotFound();
        }

        collection.splice(index, 1);
    }

    async deleteRecords(type: string, query: QueryStatement): Promise<void>
    {
        const collection = this.#getCollection(type);
        const records = this.#fetchRecords(type, query);

        const indexes = records
            .map(fetchedRecord => collection.findIndex(collectionRecord => collectionRecord.id === fetchedRecord.id))
            .sort((a, b) => b - a); // Reverse the order of indexes to delete from the end to the beginning

        indexes.forEach(index => collection.splice(index, 1));
    }

    async clear(): Promise<void>
    {
        this.#memory.clear();
    }

    #fetchRecord(type: string, id: string)
    {
        const collection = this.#getCollection(type);

        return collection.find(object => object.id === id);
    }

    #fetchRecords(type: string, query: QueryStatement)
    {
        const collection = this.#getCollection(type);
        const filterFunction = this.#buildFilterFunction(query);

        return collection.filter(filterFunction);
    }

    #updateRecordData(record: RecordData, data: RecordData)
    {
        for (const key of Object.keys(data))
        {
            record[key] = data[key];
        }
    }

    #limitNumberOfRecords(result: RecordData[], offset?: number, limit?: number): RecordData[]
    {
        if (offset === undefined && limit === undefined)
        {
            return result;
        }

        const first = offset ?? 0;
        const last = limit === undefined ? undefined : first + limit;

        return result.slice(first, last);
    }

    #sortRecords(result: RecordData[], sort?: RecordSort): RecordData[]
    {
        if (sort === undefined)
        {
            return result;
        }

        return result.sort((a: RecordData, b: RecordData) =>
        {
            for (const key in sort)
            {
                const order = sort[key];
                const valueA = a[key] as string;
                const valueB = b[key] as string;

                if (valueA > valueB)
                {
                    return order === SortDirections.ASCENDING ? 1 : -1;
                }
                else if (valueA < valueB)
                {
                    return order === SortDirections.ASCENDING ? -1 : 1;
                }
            }

            return 0;
        });
    }

    #buildFilterFunction(query: RecordQuery): FilterFunction
    {
        const statementCode = this.#buildStatementCode(query);
        const functionCode = statementCode === '' ? 'true' : statementCode;

        // eslint-disable-next-line sonarjs/code-eval
        return new Function('record', `return ${functionCode}`) as FilterFunction;
    }

    #buildStatementCode(query: RecordQuery): string
    {
        const multiStatements = query as QueryMultiExpressionStatement;
        const singleStatements = query as QuerySingleExpressionStatement;

        const statementCodes = [];

        for (const key in multiStatements)
        {
            const code = key === 'AND' || key === 'OR'
                ? this.#buildMultiStatementCode(key, multiStatements[key] ?? [])
                : this.#buildExpressionCode(key, singleStatements[key]);

            statementCodes.push(code);
        }

        return statementCodes.join(' && ');
    }

    #buildMultiStatementCode(operator: string, statements: QuerySingleExpressionStatement[])
    {
        const codeOperator = LOGICAL_OPERATORS[operator];
        const statementCodes = [];

        for (const statement of statements)
        {
            const statementCode = this.#buildStatementCode(statement);

            statementCodes.push(statementCode);
        }

        const code = statementCodes.join(` ${codeOperator} `);

        return `(${code})`;
    }

    #buildExpressionCode(key: string, expression: QueryExpression)
    {
        const expressionCodes = [];

        for (const operator in expression)
        {
            const value = (expression as RecordData)[operator];
            const expressionCode = this.#buildOperatorCode(key, operator as QueryOperator, value);

            expressionCodes.push(expressionCode);
        }

        return `(${expressionCodes.join(' && ')})`;
    }

    #buildOperatorCode(key: string, operator: QueryOperator, value: RecordValue): string
    {
        const codeValue = JSON.stringify(value);

        switch (operator)
        {
            case QueryOperators.STARTS_WITH: return `record.${key}.startsWith(${codeValue})`;
            case QueryOperators.ENDS_WITH: return `record.${key}.endsWith(${codeValue})`;
            case QueryOperators.CONTAINS: return `record.${key}.includes(${codeValue})`;
            case QueryOperators.IN: return `${codeValue}.includes(record.${key})`;
            case QueryOperators.NOT_IN: return `!${codeValue}.includes(record.${key})`;
        }

        const codeOperator = OPERATORS[operator];

        return `record.${key} ${codeOperator} ${codeValue}`;
    }

    #createId(): string
    {
        return (++this.recordId).toString().padStart(8, '0');
    }

    #getCollection(type: string): RecordData[]
    {
        if (this.#memory === undefined)
        {
            throw new NotConnected();
        }

        let collection = this.#memory.get(type);

        if (collection === undefined)
        {
            collection = [];

            this.#memory.set(type, collection);
        }

        return collection;
    }

    #buildRecordData(data: RecordData, fields?: RecordField[]): RecordData
    {
        if (fields === undefined)
        {

            return { ...data };
        }

        const result: RecordData = {};

        for (const field of fields)
        {
            result[field] = data[field];
        }

        return result;
    }
}
