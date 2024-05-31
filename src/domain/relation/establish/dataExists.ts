
import database, { RecordQuery } from '^/integrations/database/module';

import { RECORD_TYPE } from '../definitions';

export default async function dataExists(followerId: string, followingId: string): Promise<boolean>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const data = await database.findRecord(RECORD_TYPE, query);

    return data !== undefined;
}
