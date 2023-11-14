
import { 
    ObjectId,
    MongoClient,
    Document,
    Collection,
    Db,
    Filter,
    Sort
} from 'mongodb';

import { Database } from '../definitions/interfaces.js';

import {
    QueryOperators,
    SortDirections,
    LogicalOperators
} from '../definitions/constants.js';

import {
    QueryOperator,
    QueryMultiExpressionStatement,
    QuerySingleExpressionStatement,
    RecordData,
    RecordField,
    RecordId,
    RecordQuery,
    RecordSort,
    RecordType,
    RecordValue
} from '../definitions/types.js';

import {
    NotConnected,
    RecordNotCreated,
    RecordNotUpdated,
    RecordNotDeleted,
    RecordNotFound
} from '../definitions/errors.js';

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

export default class MongoDB implements Database
{
    #client?: MongoClient;
    #database?: Db;
    
    async connect(connectionString: string, databaseName: string): Promise<void>
    {
        this.#client = await this.#createClient(connectionString);
        this.#database = this.#getDatabase(databaseName);
    }

    async disconnect(): Promise<void>
    {
        if (this.#client === undefined)
        {
            throw new NotConnected();
        }

        return this.#client.close(true);
    }

    async createRecord(type: RecordType, data: RecordData): Promise<RecordId>
    {
        const collection = await this.#getCollection(type);
        const mongoId = this.#createId();
        
        try
        {
            await collection.insertOne({ _id: mongoId, ...data });
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : undefined;

            throw new RecordNotCreated(message);
        }

        return mongoId.toHexString();
    }

    async readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData>
    {

        const collection = await this.#getCollection(type);
        const mongoId = this.#createId(id); 
        const entry = await collection.findOne({ _id : mongoId });

        if (entry === null)
        {
            throw new RecordNotFound();
        }

        return this.#buildRecordData(entry as Document, fields);
    }

    async updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>
    {
        const collection = await this.#getCollection(type);
        const mongoId = this.#createId(id);
        const entry = await collection.updateOne({ _id : mongoId },{ $set : data });

        if (entry.modifiedCount === 0)
        {
            throw new RecordNotUpdated();
        }
    }

    async deleteRecord(type: RecordType, id: RecordId): Promise<void>
    {
        const collection = await this.#getCollection(type);
        const mongoId = this.#createId(id);
        const result = await collection.deleteOne({ _id: mongoId });

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

    #createId(inputId?: string): ObjectId
    {
        return new ObjectId(inputId);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                const singleMultiStatements  = multiStatements[key] ?? [];
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
            const mongoKey = key === 'id' ? '_id' : key;
            const mongoExpression: Record<string, unknown> = {};
            
            for (const operator in expression)
            {
                const value = this.#extractValue(expression as RecordData, operator as QueryOperator);
                const mongoValue = key === 'id' ? this.#createId(value as string) : value;
                const mongoOperator = OPERATORS[operator];

                mongoExpression[mongoOperator] = mongoValue;
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
    async #getCollection<T>(name : RecordType): Promise<Collection<T extends Document ? any: any>>
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
            return await MongoClient.connect(connectionString);
        }
        catch (error: unknown)
        {
            const message = error instanceof Error ? error.message : undefined;

            throw new NotConnected(message);
        }
    }

    #buildRecordData(data: Document, fields?: RecordField[]) : RecordData
    { 
        let result: RecordData = {};

        if (fields === undefined)
        {
            result = { ...data };
        }
        else
        {
            for (const field of fields)
            {
                const mongoField = field === 'id' ? '_id' : field; 
                result[field] = data[mongoField];
            }               
        }

        if (result['_id'] !== undefined)
        {
            result['id'] = result['_id'];
            delete result['_id'];
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
