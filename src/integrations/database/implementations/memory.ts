
import { Database } from '../definitions/interfaces.js';
import { RecordData, RecordField, QueryStatement, RecordSort } from '../definitions/types.js';
import { NotConnected, RecordNotFound, RecordNotUpdated } from '../module.js';

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
        throw new Error('Method not implemented.');
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
