
import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getById(id: string): Promise<DataModel | undefined>
{
    return await database.readRecord(RECORD_TYPE, id) as DataModel;
}
