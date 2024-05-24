
import database from '^/integrations/database/module';
import { generateId } from '^/integrations/utilities/crypto';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly storageKey: string;
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

export default async function insertData(storageKey: string, filename: string, mimeType: string, size: number): Promise<Data>
{
    const id = generateId();

    const record: Data = { id, storageKey, filename, mimeType, size };

    await database.createRecord(RECORD_TYPE, record);

    return record;
}
