
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function decreaseRatingCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.decreaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
