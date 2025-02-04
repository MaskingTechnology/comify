
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';

import getById from '../getById';
import PostNotFound from '../PostNotFound';

import deleteData from './deleteData';
import isNotOwner from './isNotOwner';
import publish from './publish';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards the reactions as it doesn't add
    // any value, and it would make the code more complex.

    try
    {
        const post = await getById(id);

        if (isNotOwner(post, requester.id))
        {
            throw new PostNotFound();
        }

        await deleteData(id);

        publish(requester.id, post.id, post.parentId);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to remove post', error);

        throw error;
    }
}
