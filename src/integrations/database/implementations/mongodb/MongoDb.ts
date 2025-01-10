
import { Collection, Db, Document, Filter, MongoClient, Sort } from 'mongodb';

import { ID, LogicalOperators, QueryOperators, SortDirections } from '../../definitions/constants.js';
import { Driver } from '../../definitions/interfaces.js';
import { QueryMultiExpressionStatement, QueryOperator, QuerySingleExpressionStatement, RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType, RecordValue } from '../../definitions/types.js';
import DatabaseError from '../../errors/DatabaseError.js';
import NotConnected from '../../errors/NotConnected.js';
import RecordNotCreated from '../../errors/RecordNotCreated.js';
import RecordNotDeleted from '../../errors/RecordNotDeleted.js';
import RecordNotFound from '../../errors/RecordNotFound.js';
import RecordNotUpdated from '../../errors/RecordNotUpdated.js';

const UNKNOWN_ERROR = 'Unknown error';

const OPERATORS =
{
    [QueryOperators.EQUALS]: '$eq',
    [QueryOperators.GREATER_THAN]: '$gt',
    [QueryOperators.GREATER_THAN_OR_EQUALS]: '$gte',
    [QueryOperators.IN]: '$in',
    [QueryOperators.LESS_THAN]: '$lt',
    [QueryOperators.LESS_THAN_OR_EQUALS]: '$lte',
    [QueryOperators.NOT_EQUALS]: '$ne',
    [QueryOperators.NOT_IN]: '$nin',
    [QueryOperators.CONTAINS]: '$regex',
    [QueryOperators.STARTS_WITH]: '$regex',
    [QueryOperators.ENDS_WITH]: '$regex'
};

const LOGICAL_OPERATORS =
{
    [LogicalOperators.AND]: '$and',
    [LogicalOperators.OR]: '$or'
};

const MONGO_ID = '_id';

export default class MongoDB implements Driver
{
    #connectionString: string;
    #databaseName: string;

    #client?: MongoClient;
    #database?: Db;
    #connected = false;

    constructor(connectionString: string, databaseName: string)
    {
        this.#connectionString = connectionString;
        this.#databaseName = databaseName;
    }

    get connected() { return this.#connected; }

    async connect(): Promise<void>
    {
        try
        {
            this.#client = await this.#createClient(this.#connectionString);

            this.#client.on('close', () => { this.#connected = false; });

            this.#client.on('serverHeartbeatSucceeded', () => { this.#connected = true; });
            this.#client.on('serverHeartbeatFailed', () => { this.#connected = false; });

            this.#database = this.#getDatabase(this.#databaseName);
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : UNKNOWN_ERROR;

            throw new DatabaseError('Database connection failed: ' + message);
        }
    }

    async disconnect(): Promise<void>
    {
        if (this.#client === undefined)
        {
            throw new NotConnected();
        }

        try
        {
            await this.#client.close();

            this.#connected = false;
            this.#client = undefined;
            this.#database = undefined;
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : UNKNOWN_ERROR;

            throw new DatabaseError('Database disconnection failed: ' + message);
        }
    }

    async createRecord(type: RecordType, data: RecordData): Promise<RecordId>
    {
        const collection = await this.#getCollection(type);
        const dataCopy = { ...data };
        const id = dataCopy.id as RecordId;

        delete dataCopy.id;

        try
        {
            await collection.insertOne({ _id: id, ...dataCopy });
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : UNKNOWN_ERROR;

            throw new RecordNotCreated(message);
        }

        return id;
    }

    async readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData>
    {
        const collection = await this.#getCollection(type);
        const entry = await collection.findOne({ _id: id });

        if (entry === null)
        {
            throw new RecordNotFound(`Record ${type} found: ${id}`);
        }

        return this.#buildRecordData(entry as Document, fields);
    }

    async updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>
    {
        const collection = await this.#getCollection(type);
        const entry = await collection.updateOne({ _id: id }, { $set: data });

        if (entry.modifiedCount === 0)
        {
            throw new RecordNotUpdated();
        }
    }

    async deleteRecord(type: RecordType, id: RecordId): Promise<void>
    {
        const collection = await this.#getCollection(type);
        const result = await collection.deleteOne({ _id: id });

        if (result.deletedCount !== 1)
        {
            throw new RecordNotDeleted();
        }
    }

    async findRecord(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort): Promise<RecordData | undefined>
    {
        const result = await this.searchRecords(type, query, fields, sort, 1, 0);

        return result[0];
    }

    async searchRecords(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>
    {
        const mongoQuery = this.#buildMongoQuery(query);
        const mongoSort = this.#buildMongoSort(sort);

        const collection = await this.#getCollection(type);
        const cursor = collection.find(mongoQuery, { sort: mongoSort, limit: limit, skip: offset });
        const result = await cursor.toArray();

        return result.map(data => this.#buildRecordData(data, fields));
    }

    async clear(): Promise<void>
    {
        return; // Deliberately not implemented
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, sonarjs/cognitive-complexity
    #buildMongoQuery(query: RecordQuery): Filter<any> 
    {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mongoQuery: Filter<any> = {};
        const multiStatements = query as QueryMultiExpressionStatement;
        const singleStatements = query as QuerySingleExpressionStatement;

        for (const key in multiStatements)
        {
            if (key === 'AND' || key === 'OR')
            {
                const singleMultiStatements = multiStatements[key] ?? [];
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const multiMongoQuery: Filter<any>[] = [];

                for (const statement of singleMultiStatements)
                {
                    const mongoQuery = this.#buildMongoQuery(statement);
                    multiMongoQuery.push(mongoQuery);
                }

                const mongoKey = LOGICAL_OPERATORS[key];
                mongoQuery[mongoKey] = multiMongoQuery;

                continue;
            }

            const expression = singleStatements[key];
            const mongoKey = key === ID ? MONGO_ID : key;
            const mongoExpression: Record<string, unknown> = {};

            for (const operator in expression)
            {
                const value = this.#extractValue(expression as RecordData, operator as QueryOperator);
                const mongoOperator = OPERATORS[operator];

                mongoExpression[mongoOperator] = value;
            }

            mongoQuery[mongoKey] = mongoExpression;
        }

        return mongoQuery;
    }

    #buildMongoSort(sort?: RecordSort): Sort
    {
        const mongoSort: Sort = {};

        if (sort === undefined)
        {
            return mongoSort;
        }

        for (const element in sort)
        {
            const direction = sort[element];
            mongoSort[element] = direction === SortDirections.DESCENDING ? -1 : 1;
        }

        return mongoSort;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async #getCollection<T>(name: RecordType): Promise<Collection<T extends Document ? any : any>>
    {
        if (this.#database === undefined)
        {
            throw new NotConnected();
        }

        return this.#database.collection(name);
    }

    #getDatabase(databaseName: string): Db
    {
        if (this.#client === undefined)
        {
            throw new NotConnected();
        }

        return this.#client.db(databaseName);
    }

    async #createClient(connectionString: string): Promise<MongoClient>
    {
        try
        {
            const client = await MongoClient.connect(connectionString);

            this.#connected = true;

            return client;
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : undefined;

            throw new NotConnected(message);
        }
    }

    #buildRecordData(data: Document, fields?: RecordField[]): RecordData
    {
        const result: RecordData = {};

        if (fields === undefined)
        {
            const recordData = { ...data };
            fields = Object.keys(recordData);

            const idIndex = fields.indexOf(MONGO_ID);
            fields[idIndex] = ID;
        }

        for (const field of fields)
        {
            const value = field === ID
                ? data[MONGO_ID]
                : data[field];

            result[field] = value ?? undefined;
        }

        return result;
    }

    #extractValue(expression: RecordData, operator: QueryOperator): RecordValue
    {
        const value = expression[operator];

        switch (operator)
        {
            case QueryOperators.STARTS_WITH: return '^' + value;
            case QueryOperators.ENDS_WITH: return value + '$';
        }

        return value;
    }
}
