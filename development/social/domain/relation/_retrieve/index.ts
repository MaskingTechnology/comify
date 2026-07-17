
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function run(followerId: string, followingId: string): Promise<Record>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.readRecord(RECORD_TYPE, query) as Record | undefined;

    return record ?? { id: undefined, followerId, followingId, };
}
