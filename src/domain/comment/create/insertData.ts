
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function insertData(data: DataModel): Promise<void>
{
    await database.createRecord(RECORD_TYPE, data);
}
