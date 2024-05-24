
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export type Data = {
    readonly id: string;
    readonly message: string;
};

export default async function insertData(data: RecordData): Promise<Data>
{
    const record = { ...data };

    await database.createRecord(RECORD_TYPE, record);

    return record as Data;
}
