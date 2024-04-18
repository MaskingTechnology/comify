
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseRatingCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.increaseRatingCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
