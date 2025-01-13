
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function insertData(data: DataModel): Promise<string>
{
    return database.createRecord(RECORD_TYPE, { ...data, deleted: false });
}
