
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';
import { Types } from '^/domain/notification';
import createNotification from '^/domain/notification/create';
import getPost from '^/domain/post/getById';
import updateRating from '^/domain/rating/update';

import updateRatingCount from '../updateRatingCount';

export default async function toggleRating(requester: Requester, postId: string): Promise<boolean>
{
    let ratingId;

    try
    {
        ratingId = await updateRating(requester, postId, undefined);

        if (ratingId === undefined)
        {
            await updateRatingCount(postId, 'decrease');

            return false;
        }

        await updateRatingCount(postId, 'increase');

        const post = await getPost(postId);

        await createNotification(Types.RATED_POST, requester.id, post.creatorId, postId);

        return true;
    }
    catch (error)
    {
        logger.logError('Failed to toggle rating', error);

        if (ratingId !== undefined) 
        {
            await updateRating(requester, postId, undefined);
        }

        throw error;
    }
}
