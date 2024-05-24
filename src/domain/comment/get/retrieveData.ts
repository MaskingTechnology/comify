
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly message: string;
};

export default async function retrieve(id: string): Promise<Data>
{
    const fields = ['id', 'message'];

    return database.readRecord(RECORD_TYPE, id, fields) as Promise<Data>;
}
