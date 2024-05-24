
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly imageId: string;
};

export default async function retrieveData(id: string): Promise<Data>
{
    const fields = ['id', 'imageId'];

    return database.readRecord(RECORD_TYPE, id, fields) as Promise<Data>;
}
