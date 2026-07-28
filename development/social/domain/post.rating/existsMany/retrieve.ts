
import type { QuerySingleStatement } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type RatingKey, type Record } from '../definitions';

export default async function (keys: RatingKey[]): Promise<Record[]>
{
    const queries: QuerySingleStatement<Record>[] = keys.map(key =>
    {
        return {
            creatorId: { EQUALS: key.creatorId },
            postId: { EQUALS: key.postId }
        };
    });

    return database.searchRecords<Record>(RECORD_TYPE, { OR: queries }, ['id']);
}
