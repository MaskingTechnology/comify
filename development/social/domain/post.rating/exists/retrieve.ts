
import type { RecordQuery } from '@theshelf/database';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type RatingKey, type Record } from '../definitions';

export default async function (key: RatingKey): Promise<Record | undefined>
{
    const query: RecordQuery<Record> =
    {
        creatorId: { EQUALS: key.creatorId },
        postId: { EQUALS: key.postId }
    };

    return database.readRecord<Record>(RECORD_TYPE, query, ['id']);
}
