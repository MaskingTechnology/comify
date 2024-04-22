
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function decreaseReactionCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.decreaseReactionCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
