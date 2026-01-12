
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';
import type { DataModel } from '../types';

export default async function get(followerId: string, followingId: string): Promise<DataModel>
{
    const query: RecordQuery =
    {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    };

    const record = await database.readRecord(RECORD_TYPE, query) as DataModel | undefined;

    return record ?? { id: undefined, followerId, followingId, };
}
