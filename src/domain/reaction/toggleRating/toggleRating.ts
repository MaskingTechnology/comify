
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';
import { Types } from '^/domain/notification';
import createNotification from '^/domain/notification/create';
import updateRating from '^/domain/rating/update';
import getReaction from '^/domain/reaction/getById';

import updateRatingCount from '../updateRatingCount';

export default async function toggleRating(requester: Requester, reactionId: string): Promise<boolean>
{
    let ratingId;

    try
    {
        ratingId = await updateRating(requester, undefined, reactionId);

        if (ratingId === undefined)
        {
            await updateRatingCount(reactionId, 'decrease');

            return false;
        }

        await updateRatingCount(reactionId, 'increase');

        const reaction = await getReaction(reactionId);

        await createNotification(Types.RATED_REACTION, requester.id, reaction.creatorId, undefined, reactionId);

        return true;
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
