
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseRatingCount(ratingId: string): Promise<number>
{
    const currentData = await retrieveData(ratingId);

    const updatedData = currentData.decreaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
