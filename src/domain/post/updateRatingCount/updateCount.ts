
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function updateCount(id: string, count: number): Promise<void>
{
    const recordData = { ratingCount: count };

    return database.updateRecord(RECORD_TYPE, id, recordData);
}