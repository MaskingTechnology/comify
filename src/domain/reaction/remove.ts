
import type Requester from '../authentication/Requester';
import decreaseReactionCount from '../post/decreaseReactionCount';
import increaseReactionCount from '../post/increaseReactionCount';
import removeData from './data/remove';
import retrieveOwn from './data/retrieveOwn';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the reaction itself and do not cascade it towards the comment or comic as it doesn't add
    // any value, and it would make the code more complex.

    const reaction = await retrieveOwn(id, requester.id);

    let postCount;

    try
    {
        postCount = await decreaseReactionCount(reaction.postId);

        await removeData(reaction);
    }
    catch (error: unknown)
    {
        if (postCount !== undefined)
        {
            await increaseReactionCount(reaction.postId);
        }

        throw error;
    }
}
