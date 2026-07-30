
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../../definitions';

export default async function (creatorId: string, postId: string): Promise<boolean>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, {
        creatorId: { EQUALS: creatorId },
        postId: { EQUALS: postId }
    });

    return result > 0;
}
