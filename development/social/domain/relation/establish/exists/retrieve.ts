
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '../../definitions';

export default async function (followerId: string, followingId: string): Promise<Record | undefined>
{
    return database.readRecord<Record>(RECORD_TYPE, {
        followerId: { EQUALS: followerId },
        followingId: { EQUALS: followingId }
    });
}
