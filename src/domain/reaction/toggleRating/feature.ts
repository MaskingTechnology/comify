
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import updateRating from '^/domain/rating/update/feature';

import updateRatingCount from '../updateRatingCount/feature';

export default async function feature(requester: Requester, reactionId: string): Promise<boolean>
{
    let ratingId;

    try
    {
        ratingId = await updateRating(requester, undefined, reactionId);

        ratingId !== undefined
            ? await updateRatingCount(reactionId, 'increase')
            : await updateRatingCount(reactionId, 'decrease');

        return ratingId !== undefined;
    }
    catch (error)
    {
        logger.logError('Failed to toggle rating', error);

        if (ratingId !== undefined) 
        {
            await updateRating(requester, undefined, reactionId);
        }

        throw error;
    }
}
