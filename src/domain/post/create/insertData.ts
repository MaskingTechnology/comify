
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function insertData(data: RecordData): Promise<string>
{
    const record: RecordData = { ...data, deleted: false };

    return database.createRecord(RECORD_TYPE, record);
}
