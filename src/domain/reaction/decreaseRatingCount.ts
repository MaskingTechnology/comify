
import ReactionData from './data/ReactionData';
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseRatingCount(ratingId: string): Promise<number>
{
    const rating = await retrieveData(ratingId);

    const updatedRating = new ReactionData(
        rating.id,
        rating.creatorId,
        rating.postId,
        rating.comicId,
        rating.commentId,
        rating.ratingCount - 1,
        rating.createdAt
    );

    await updateData(updatedRating);

    return updatedRating.ratingCount;
}
