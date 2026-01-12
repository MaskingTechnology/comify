
import type { RecordQuery } from '@theshelf/database';

import database from '^/integrations/database';

import { RECORD_TYPE } from '../definitions';

export default async function exists(creatorId: string, postId: string): Promise<boolean>
{
    const query: RecordQuery =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    const record = await database.readRecord(RECORD_TYPE, query, ['id']);

    return record !== undefined;
}
