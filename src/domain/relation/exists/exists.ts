
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function exists(followerId: string, followingId: string): Promise<boolean>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.readRecord(RECORD_TYPE, query);

    return record !== undefined;
}
