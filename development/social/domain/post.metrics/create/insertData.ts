
import database from '@comify/common/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { BaseData } from '../definitions';

export default async function insertData(data: DataModel): Promise<string>
{
    return database.createRecord(RECORD_TYPE, { ...data });
}
