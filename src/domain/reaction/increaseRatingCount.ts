
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increaseRatingCount(ratingId: string): Promise<number>
{
    const currentData = await retrieveData(ratingId);

    const updatedData = currentData.increaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
