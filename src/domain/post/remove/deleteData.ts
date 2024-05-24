
import database, { RecordData } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function deleteData(id: string): Promise<void>
{
    const recordData: RecordData = { deleted: true };

    return database.updateRecord(RECORD_TYPE, id, recordData);
}
