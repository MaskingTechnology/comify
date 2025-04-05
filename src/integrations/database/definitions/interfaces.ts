
import type { RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType } from './types';

export interface Driver
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
    updateRecords(type: RecordType, query: RecordQuery, data: RecordData): Promise<void>;
    deleteRecords(type: RecordType, query: RecordQuery): Promise<void>;
    clear(): Promise<void>;
}
