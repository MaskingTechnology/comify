
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, Record } from '../definitions';

export default async function retrieve(creatorId: string, postId: string): Promise<Record | undefined>
{
    const query: RecordQuery<Record> =
    {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    };

    return database.readRecord<Record>(RECORD_TYPE, query, ['id']);
}
