
import type { RecordQuery } from '^/integrations/database';
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

    const data = await database.findRecord(RECORD_TYPE, query) as DataModel | undefined;

    return data ?? { id: undefined, followerId, followingId, };
}
