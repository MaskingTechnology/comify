
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../definitions';

export default async function (creatorId: string, postId: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    });
}
