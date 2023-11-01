
import { QueryExpression, QueryOperator, QueryMultiExpressionStatement, QuerySingleExpressionStatement, QueryStatement, RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType, RecordValue } from '../definitions/types';
import { MongoClient, Document, Collection, Db, DbOptions, Filter, Sort } from 'mongodb';
import createId from '../../../common/createId.js';
import DatabaseError from './DatabaseError.js';
import { QueryOperators, SortDirections } from '../module.js';

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

const BOOLEAN =
{
    ['AND'] : '$and',
    ['OR'] : '$or'

};

let client: MongoClient;
let database: Db;

export async function connect(connectionString: string, databaseName: string): Promise<void>
{
    client = await createClient(connectionString);
    database = getDatabase(databaseName);
}

export async function disconnect(): Promise<void>
{
   return client.close(true);
}

export async function createRecord(type: RecordType, data: RecordData): Promise<RecordId>
{
    const collection = await getCollection(type);
    const mongoId = await createId();
    
    try
    {
        await collection.insertOne({ _id: mongoId, ...data } );
    }
    catch (error: any)
    {
        throw new DatabaseError(error?.message);
    }   

    return mongoId.toHexString();

}

export async function readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData | undefined>
{
    const collection = await getCollection(type);
    const mongoId = await createId(id);       
    const entry = await collection.findOne({_id : mongoId, filter : fields });

    if (entry === null)
    {
        return;
    }

    return buildRecordData(entry as Document, fields);
}

export async function updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>
{
    const collection = await getCollection(type);
    const entry = await collection.updateOne({_id : id},{$set : data});

    if (entry.modifiedCount === 0)
    {
        throw new DatabaseError("Record update failed");
    }
}

export async function deleteRecord(type: RecordType, id: RecordId): Promise<void>
{
    const collection = await getCollection(type);
    const mongoId = await createId(id);
    const result = await collection.deleteOne({ _id: mongoId } );

    if (result.deletedCount !== 1)
    {
        throw new DatabaseError("Record delete failed");
    }

}

export async function findRecord(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort): Promise<RecordData | undefined>
{
    const result = await searchRecords(type, query, fields, sort, 1, 0);

    return result[0];
}

export async function searchRecords(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>
{
    const mongoQuery = buildMongoQuery(query);
    console.log(JSON.stringify(mongoQuery));
    const mongoSort = buildMongoSort(sort);
    console.log(JSON.stringify(sort));
    const collection = await getCollection(type);
    const cursor = collection.find(mongoQuery, { sort: mongoSort, limit: limit, skip: offset });
    const result = await cursor.toArray();
 
    return result.map(data => buildRecordData(data, fields));
}

function buildMongoQuery(query: RecordQuery): Filter<any> 
{
    const mongoQuery: Filter<any> = {};
    const multiStatements = query as QueryMultiExpressionStatement;
    const singleStatements = query as QuerySingleExpressionStatement;
 
    for (const key in multiStatements)
    {
        if (key === 'AND' || key ==='OR')
        {
            const singleMultiStatements  = multiStatements[key] ?? [];
            const multiMongoQuery: Filter<any>[] = [];
            
            for (const statement of singleMultiStatements)
            {
                const mongoQuery = buildMongoQuery(statement);
                multiMongoQuery.push(mongoQuery);
            }
            const mongoKey = BOOLEAN[key];
            mongoQuery[mongoKey] = multiMongoQuery;
        }
        
        else
        {
            
            const expresssion = singleStatements[key];
            const mongoExpression: Record<string, unknown> = {};
            
            for (const operator in expresssion)
            {
                const value = extractValue(expresssion as RecordData, operator as QueryOperator);
                const mongoOperator = OPERATORS[operator];

                mongoExpression[mongoOperator] = value;
            }

            mongoQuery[key] = mongoExpression;
        }

    }   

    return mongoQuery;
}

function buildMongoSort(sort?: RecordSort): Sort
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

async function getCollection<T>(name : RecordType): Promise<Collection<T extends Document ? any: any>>
{
    if (database === undefined)
    {
        throw new DatabaseError("Connection lost");
    }

    return database.collection(name);
}

function getDatabase(databaseName: string): Db
{   
    if (client === undefined)
    {
        throw new DatabaseError("Connection lost");
    }
    
    return client.db(databaseName);   
}
    
async function createClient(connectionString: string): Promise<MongoClient>
{
     try
     {
         return await MongoClient.connect(connectionString);
     }
     catch (error: any)
     {
         throw new DatabaseError(error?.message);
     }   
}

function buildRecordData(data: Document, fields?: RecordField[]) : RecordData
{ 
    const result: RecordData = {};

    if (fields === undefined)
    {
        return {...data};
    }

    for (const field of fields)
    {
        const dataField = field === 'id' ? '_id' : field;
        result[field] = data[dataField];
    }

    return(result);
}

function extractValue(expression: RecordData, operator: QueryOperator): RecordValue
{
    const value = expression[operator];

    switch (operator)
    {
        case QueryOperators.STARTS_WITH: return '^' + value;
        case QueryOperators.ENDS_WITH: return value + '$';
    }

    return value;
}
