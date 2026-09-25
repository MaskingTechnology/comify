
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../../definitions';

export default async function (followerId: string, followingId: string): Promise<Record | undefined>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    });

    return result.record;
}
