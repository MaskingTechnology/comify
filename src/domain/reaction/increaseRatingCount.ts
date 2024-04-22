
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseRatingCount(ratingId: string): Promise<number>
{
    const currentData = await retrieveData(ratingId);

    const updatedPost = currentData.increaseRatingCount();

    await updateData(updatedPost);

    return updatedPost.ratingCount;
}
