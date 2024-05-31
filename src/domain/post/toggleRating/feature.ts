
import type { Requester } from '^/domain/authentication/types';
import updateRating from '^/domain/rating/update/feature';

import updateRatingCount from '../updateRatingCount/feature';

export default async function feature(requester: Requester, postId: string): Promise<boolean>
{
    let ratingId;

    try
    {
        ratingId = await updateRating(requester, postId, undefined);

        ratingId !== undefined
            ? await updateRatingCount(postId, 'increase')
            : await updateRatingCount(postId, 'decrease');

        return ratingId !== undefined;
    }
    catch (error)
    {
        if (ratingId !== undefined) 
        {
            await updateRating(requester, postId, undefined);
        }

        throw error;
    }
}
