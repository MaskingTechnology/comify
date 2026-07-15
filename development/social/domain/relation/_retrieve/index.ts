
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Data } from '../definitions';

export default async function run(followerId: string, followingId: string): Promise<Data>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.readRecord(RECORD_TYPE, query) as Data | undefined;

    return record ?? { id: undefined, followerId, followingId, };
}
