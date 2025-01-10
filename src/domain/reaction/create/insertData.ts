
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import { DataModel } from '../types';

export default async function insertData(data: DataModel): Promise<string>
{
    return database.createRecord(RECORD_TYPE, { ...data, deleted: false });
}
