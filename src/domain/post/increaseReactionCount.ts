
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseReactionCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.increaseReactionCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
