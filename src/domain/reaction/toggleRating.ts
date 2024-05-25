
import type Requester from '../authentication/Requester';
import updateRating from '../rating/update/feature';
import decreaseRatingCount from './decreaseRatingCount';
import increaseRatingCount from './increaseRatingCount';

export default async function toggleRating(requester: Requester, reactionId: string): Promise<boolean>
{
    let ratingId;

    try
    {
        ratingId = await updateRating(requester, undefined, reactionId);

        ratingId !== undefined
            ? await increaseRatingCount(reactionId)
            : await decreaseRatingCount(reactionId);

        return ratingId !== undefined;
    }
    catch (error)
    {
        if (ratingId !== undefined) 
        {
            await updateRating(requester, undefined, reactionId);
        }

        throw error;
    }
}
