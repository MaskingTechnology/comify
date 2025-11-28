
import type { RecordQuery } from '@theshelf/database';
import database from '@theshelf/database';

import { RECORD_TYPE } from '../definitions';

export default async function exists(creatorId: string, postId: string): Promise<boolean>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    const data = await database.findRecord(RECORD_TYPE, query, ['id']);

    return data !== undefined;
}
