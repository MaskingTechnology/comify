
import { type RatingKey } from '../../definitions';
import { logger } from '../../integrations';

import erase from './erase';

export default async function (key: RatingKey): Promise<void>
{
    const succeeded = await erase(key.creatorId, key.postId);

    if (succeeded === false)
    {
        logger.warn(`Rating for post '${key.postId}' by creator '${key.creatorId}' has not been deleted.`);
    }
}
