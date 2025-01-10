
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';
import updateCreatorPostCount from '^/domain/creator/updatePostCount';

import PostNotFound from '../PostNotFound';
import removeData from './deleteData';
import ownsData from './ownsData';

export default async function remove(requester: Requester, id: string): Promise<void>
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
        creatorCount = await updateCreatorPostCount(requester.id, 'decrease');

        await removeData(id);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to remove post', error);

        if (creatorCount !== undefined)
        {
            await updateCreatorPostCount(requester.id, 'increase');
        }

        throw error;
    }
}
