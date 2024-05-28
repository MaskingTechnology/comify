
import database from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function retrieveCount(id: string): Promise<number>
{
    const fields = ['postCount'];

    const record = await database.readRecord(RECORD_TYPE, id, fields);

    return record.postCount as number;
}
