
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseRatingCount(ratingId: string): Promise<number>
{
    const currentData = await retrieveData(ratingId);

    const updatedRating = currentData.decreaseRatingCount();

    await updateData(updatedRating);

    return updatedRating.ratingCount;
}
