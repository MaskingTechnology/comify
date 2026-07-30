
import { type RelationKey } from '../../definitions';
import { logger } from '../../integrations';

import erase from './erase';

export default async function (key: RelationKey): Promise<boolean>
{
    const succeeded = await erase(key.followerId, key.followingId);

    if (succeeded === false)
    {
        logger.warn(`Relation between '${key.followerId}' and '${key.followingId}' could not be removed.`);
    }

    return succeeded;
}
