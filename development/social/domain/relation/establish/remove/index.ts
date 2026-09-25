
import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record, type RelationKey } from '../../definitions';
import { logger } from '../../integrations';

export default async function (key: RelationKey): Promise<void>
{
    const result = await database.deleteRecord<Record>(RECORD_TYPE, {
        followerId: { EQUALS: key.followerId },
        followingId: { EQUALS: key.followingId },
    });

    if (result.noChanges)
    {
        logger.warn(`Relation between '${key.followerId}' and '${key.followingId}' could not be removed.`);
    }
}
