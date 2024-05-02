
import Requester from '../authentication/Requester';
import decreaseReactionCount from '../post/decreaseReactionCount';
import increaseReactionCount from '../post/increaseReactionCount';
import retrieveOwn from './data/retrieveOwn';
import updateData from './data/update';

export default async function remove(requester: Requester, reactionId: string): Promise<void>
{
    // We only delete the reaction itself and do not cascade it towards the comment or comic as it doesn't add
    // any value, and it would make the code more complex.

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
