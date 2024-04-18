
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseRatingCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.decreaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
