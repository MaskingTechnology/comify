
import { Database } from '../definitions/interfaces.js';
import { RecordData, RecordField, RecordValue, QueryOperator, QueryStatement, QueryMultiExpressionStatement, QuerySingleExpressionStatement, RecordSort, RecordQuery, QueryExpression } from '../definitions/types.js';
import { LogicalOperators, QueryOperators, SortDirections } from '../definitions/constants.js';
import { NotConnected, RecordNotFound, RecordNotUpdated } from '../definitions/errors.js';

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

export default class MemoryDb implements Database
{
    #memory?: Map<string, RecordData[]>;
    recId: number = 0;


    async connect(connectionString: string, databaseName: string): Promise<void>
    {
        this.#memory = new Map(); 
    }

    async disconnect(): Promise<void>
    {
        this.#memory = undefined;
    }

    async createRecord(type: string, data: RecordData): Promise<string>
    {
        const collection = this.#getCollection(type);
        const id = this.#createId();
        const record = {'id' : id, ...data};
        collection.push(record);

        return id; 
    }

    async readRecord(type: string, id: string, fields?: string[] | undefined): Promise<RecordData | undefined>
    {
        const collection = this.#getCollection(type);
        const record = collection.find(object => object.id === id);

        if (record === undefined)
        {
            throw new RecordNotFound();
        } 

        return this.#buildRecordData(record, fields);
    }

    async updateRecord(type: string, id: string, data: RecordData): Promise<void>
    {
        const collection = this.#getCollection(type);
        const record = collection.find(object => object.id === id);

        if (record === undefined)
        {
            throw new RecordNotUpdated();
        }
        
        for (const key in Object.keys(data))
        {
            record[key] = data[key];
        }
    }

    async deleteRecord(type: string, id: string): Promise<void>
    {
        const collection = this.#getCollection(type);
        const index = collection.findIndex(object => object.id === id);

        if (index === -1)
        {
            throw new RecordNotFound();
        }

        collection.splice(index, 1);
        
    }

    async findRecord(type: string, query: QueryStatement, fields?: string[] | undefined, sort?: RecordSort | undefined): Promise<RecordData | undefined>
    {
        const result = await this.searchRecords(type, query, fields, sort, 1, 0);

        return result[0];
    }

    async searchRecords(type: string, query: QueryStatement, fields?: string[] | undefined, sort?: RecordSort | undefined, limit?: number | undefined, offset?: number | undefined): Promise<RecordData[]>
    {
        const collection = this.#getCollection(type); 
        const filterFunction = this.#buildFilterFunction(query);
        const result = collection.filter(filterFunction);

        const limitedResult = this.#limitNumberOfRecords(result, limit);

        const sortedResult = this.#sortRecords(limitedResult, sort);
        return result.map(records => this.#buildRecordData(records, fields));
    }

    #limitNumberOfRecords(result: RecordData[], offset?: number, limit?: number): RecordData[]
    {
        if (offset === undefined && limit === undefined)
        {
            return result;
        }

        const first = offset === undefined ? 0 : offset;
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

        return new Function('record', `return ${functionCode}`) as FilterFunction;
    }

    #buildStatementCode(query: RecordQuery): string
    {
        const multiStatements = query as QueryMultiExpressionStatement;
        const singleStatements = query as QuerySingleExpressionStatement;

        let statementCodes = [];

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

        return `(${statementCodes.join(` ${codeOperator} `)})`;
    }

    #buildExpressionCode(key:string, expression: QueryExpression)
    {
        let expressionCodes = [];

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
        const newId = (this.recId++).toString().padStart(8,'0');

        return newId;
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

    #buildRecordData(data: RecordData, fields?: RecordField[]) : RecordData
    { 
        let result: RecordData = {};

        if (fields === undefined)
        {
            result = { ...data };

            return result;
        }

        for (const field of fields)
        {
            result[field] = data[field];
        }

        return result;
    }

}
