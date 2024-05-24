
import type Requester from '^/domain/authentication/Requester';
import decreasePostCount from '^/domain/creator/decreasePostCount';
import increasePostCount from '^/domain/creator/increasePostCount';

import PostNotFound from '../PostNotFound';
import removeData from './deleteData';
import ownsData from './ownsData';

export default async function feature(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards the reactions as it doesn't add
    // any value, and it would make the code more complex.

    const isOwner = await ownsData(id, requester.id);

    if (isOwner === false)
    {
        throw new PostNotFound();
    }

    let creatorCount;

    try
    {
        creatorCount = await decreasePostCount(requester.id);

        await removeData(id);
    }
    catch (error: unknown)
    {
        if (creatorCount !== undefined)
        {
            await increasePostCount(requester.id);
        }

        throw error;
    }
}
