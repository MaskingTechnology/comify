
import type Requester from '../authentication/Requester';
import decreasePostCount from '../creator/decreasePostCount';
import increasePostCount from '../creator/increasePostCount';
import removeData from './repository/remove';
import retrieveOwn from './repository/retrieveOwn';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards the reactions as it doesn't add
    // any value, and it would make the code more complex.

    const post = await retrieveOwn(id, requester.id);

    let creatorCount;

    try
    {
        creatorCount = await decreasePostCount(post.creatorId);

        await removeData(post);
    }
    catch (error: unknown)
    {
        if (creatorCount !== undefined)
        {
            await increasePostCount(post.creatorId);
        }

        throw error;
    }
}
