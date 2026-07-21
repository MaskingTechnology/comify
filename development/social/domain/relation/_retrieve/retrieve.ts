
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function retrieve(followerId: string, followingId: string): Promise<Record | undefined>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    return database.readRecord(RECORD_TYPE, query) as Promise<Record | undefined>;
}
