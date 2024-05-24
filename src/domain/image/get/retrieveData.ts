
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly storageKey: string;
    readonly filename: string;
    readonly mimeType: string;
    readonly size: number;
};

export default async function retrieveData(id: string): Promise<Data>
{
    const fields = ['id', 'storageKey', 'filename', 'mimeType', 'size'];

    return database.readRecord(RECORD_TYPE, id, fields) as Promise<Data>;
}
