
import Requester from '../authentication/Requester';
import decreaseReactionCount from '../post/decreaseReactionCount';
import increaseReactionCount from '../post/increaseReactionCount';
import retrieveOwn from './data/retrieveOwn';
import updateData from './data/update';

export default async function remove(requester: Requester, reactionId: string): Promise<void>
{
    const currentData = await retrieveOwn(reactionId, requester.id);
    const updatedData = currentData.delete();

    let postCount;

    try
    {
        postCount = await decreaseReactionCount(currentData.postId);

        await updateData(updatedData);
    }
    catch (error: unknown)
    {
        if (postCount !== undefined)
        {
            await increaseReactionCount(currentData.postId);
        }

        throw error;
    }
}
