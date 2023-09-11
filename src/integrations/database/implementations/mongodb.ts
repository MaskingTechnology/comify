
import { RecordData, RecordField, RecordId, RecordQuery, RecordSort, RecordType } from '../definitions/types';

export async function connect(): Promise<void>
{
    return;
}

export async function disconnect(): Promise<void>
{
    return;
}

export async function createRecord(type: RecordType, data: RecordData): Promise<RecordId>
{
    return '';
}

export async function readRecord(type: RecordType, id: RecordId, fields?: RecordField[]): Promise<RecordData>
{
    return {};
}

export async function updateRecord(type: RecordType, id: RecordId, data: RecordData): Promise<void>
{
    return;
}

export async function deleteRecord(type: RecordType, id: RecordId): Promise<void>
{
    return;
}

export async function findRecord(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort): Promise<RecordData>
{
    return {};
}

export async function searchRecords(type: RecordType, query: RecordQuery, fields?: RecordField[], sort?: RecordSort, limit?: number, offset?: number): Promise<RecordData[]>
{
    return [];
}
