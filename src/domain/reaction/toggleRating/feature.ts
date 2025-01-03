
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import createNotification from '^/domain/notification/create/feature';
import { TypesEnum } from '^/domain/notification/definitions';
import updateRating from '^/domain/rating/update/feature';
import getReaction from '^/domain/reaction/getById/feature';

import updateRatingCount from '../updateRatingCount/feature';

export default async function feature(requester: Requester, reactionId: string): Promise<boolean>
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

        await createNotification(TypesEnum.RATED_REACTION, requester.id, reaction.creatorId, undefined, reactionId);

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
