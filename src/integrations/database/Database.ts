
import { sanitize } from '^/integrations/utilities/sanitize';

import { Driver } from './definitions/interfaces';
import { RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType } from './definitions/types';

export default class Database implements Driver
{
    readonly #driver: Driver;

    constructor(driver: Driver)
    {
        this.#driver = driver;
    }

    get connected() { return this.#driver.connected; }

    connect(): Promise<void>
    {
        return this.#driver.connect();
    }

    disconnect(): Promise<void>
    {
        return this.#driver.disconnect();
    }

    createRecord(type: RecordType, data: RecordData): Promise<RecordId>
    {
        const cleanData = sanitize(data);

        return this.#driver.createRecord(type, cleanData);
    }

    readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData>
    {
        return this.#driver.readRecord(type, id, fields);
    }

    updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>
    {
        const cleanData = sanitize(data);

        return this.#driver.updateRecord(type, id, cleanData);
    }

    deleteRecord(type: RecordType, id: RecordId): Promise<void>
    {
        return this.#driver.deleteRecord(type, id);
    }

    findRecord(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort): Promise<RecordData | undefined>
    {
        return this.#driver.findRecord(type, query, fields, sort);
    }

    searchRecords(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>
    {
        return this.#driver.searchRecords(type, query, fields, sort, limit, offset);
    }

    clear(): Promise<void>
    {
        return this.#driver.clear();
    }
}
