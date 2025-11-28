
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

type Data = Partial<Omit<DataModel, 'id'>>;

export default async function update(id: string, data: Data): Promise<void>
{
    return database.updateRecord(RECORD_TYPE, id, data);
}
