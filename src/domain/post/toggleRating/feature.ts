
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import createNotification from '^/domain/notification/create/feature';
import getPost from '^/domain/post/getById/feature';
import updateRating from '^/domain/rating/update/feature';

import updateRatingCount from '../updateRatingCount/feature';

export default async function feature(requester: Requester, postId: string): Promise<boolean>
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

        await createNotification(requester, 'rated-post', post.creatorId, postId);

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
