
import { RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType } from './types.js';

export interface Database
{
    get connected(): boolean;

    connect(): Promise<void>;
    disconnect(): Promise<void>;
    createRecord(type: RecordType, data: RecordData): Promise<RecordId>;
    readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData>;
    updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>;
    deleteRecord(type: RecordType, id: RecordId): Promise<void>;
    findRecord(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort): Promise<RecordData | undefined>;
    searchRecords(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>;
}
