
import retrieveData from './data/retrieve';
import updateData from './data/update';

export default async function increaseReactionCount(postId: string): Promise<number>
{
    const currentData = await retrieveData(postId);

    const updatedPost = currentData.increaseReactionCount();

    await updateData(updatedPost);

    return updatedPost.ratingCount;
}
