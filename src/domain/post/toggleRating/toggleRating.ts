
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';
import getPost from '^/domain/post/getById';
import updateRating from '^/domain/rating/update';

import updateRatingCount from '../updateRatingCount';

import publish from './publish';

export default async function toggleRating(requester: Requester, postId: string): Promise<boolean>
{
    const post = await getPost(postId);

    let ratingId;

    try
    {
        ratingId = await updateRating(requester, postId);

        if (ratingId === undefined)
        {
            await updateRatingCount(postId, 'decrease');

            return false;
        }

        await updateRatingCount(postId, 'increase');

        publish(requester.id, post.creatorId, post.id);

        return true;
    }
    catch (error)
    {
        logger.logError('Failed to toggle rating', error);

        if (ratingId !== undefined) 
        {
            await updateRating(requester, postId);
        }

        throw error;
    }
}
