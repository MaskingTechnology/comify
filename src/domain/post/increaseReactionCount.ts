
import retrieveData from './repository/retrieve';
import updateData from './repository/update';

export default async function increaseReactionCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedData = currentData.increaseReactionCount();

    await updateData(updatedData);

    return updatedData.ratingCount;
}
