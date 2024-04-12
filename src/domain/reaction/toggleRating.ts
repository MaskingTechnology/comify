
import type Requester from '../authentication/Requester';
import updateRating from '../rating/update';
import decreaseRatingCount from './decreaseRatingCount';
import increaseRatingCount from './increaseRatingCount';

export default async function toggleRating(requester: Requester, reactionId: string): Promise<boolean>
{
    let rating;

    try
    {
        rating = await updateRating(requester, undefined, reactionId);

        console.log(`Rating updated: ` + rating);

        rating !== undefined
            ? await increaseRatingCount(reactionId)
            : await decreaseRatingCount(reactionId);

        return rating !== undefined;
    }
    catch (error)
    {
        if (rating !== undefined) 
        {
            await updateRating(requester, undefined, reactionId);
        }

        throw error;
    }
}
