
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function getById(id: string): Promise<DataModel>
{
    return database.readRecord(RECORD_TYPE, id) as Promise<DataModel>;
}
