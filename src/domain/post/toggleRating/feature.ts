
import type Requester from '^/domain/authentication/Requester';
import updateRating from '^/domain/rating/update';

import updateRatingCount from '../updateRatingCount/feature';

export default async function feature(requester: Requester, postId: string): Promise<boolean>
{
    let rating;

    try
    {
        rating = await updateRating(requester, postId, undefined);

        rating !== undefined
            ? await updateRatingCount(postId, 'increase')
            : await updateRatingCount(postId, 'decrease');

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
