
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (creatorId: string, postId: string): Promise<Record | undefined>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    });

    return result.record;
}
