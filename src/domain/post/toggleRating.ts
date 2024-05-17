
import type Requester from '^/domain/authentication/Requester';
import updateRating from '^/domain/rating/update';

import decreaseRatingCount from './decreaseRatingCount';
import increaseRatingCount from './increaseRatingCount';

export default async function toggleRating(requester: Requester, postId: string): Promise<boolean>
{
    let rating;

    try
    {
        rating = await updateRating(requester, postId, undefined);

        rating !== undefined
            ? await increaseRatingCount(postId)
            : await decreaseRatingCount(postId);

        return rating !== undefined;
    }
    catch (error)
    {
        if (rating !== undefined) 
        {
            await updateRating(requester, postId, undefined);
        }

        throw error;
    }
}
