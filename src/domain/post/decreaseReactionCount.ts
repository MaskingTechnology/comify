
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function decreaseReactionCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.decreaseReactionCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
