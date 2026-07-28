
import type { QuerySingleStatement } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type RelationKey, type Record } from '../definitions';

export default async function retrieve(keys: RelationKey[]): Promise<Record[]>
{
    const queries: QuerySingleStatement<Record>[] = keys.map(key =>
    {
        return {
            followerId: { EQUALS: key.followerId },
            followingId: { EQUALS: key.followingId }
        };
    });

    return database.searchRecords<Record>(RECORD_TYPE, { OR: queries });
}
