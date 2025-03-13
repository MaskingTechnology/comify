
import logger from '^/integrations/logging';

import type { Requester } from '^/domain/authentication';

import getById from '../getById';
import PostNotFound from '../PostNotFound';

import deleteData from './deleteData';
import isNotOwner from './isNotOwner';
import publish from './publish';
import undeleteData from './undeleteData';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards it's children as it doesn't add
    // any value, and it would make the code more complex.

    let deleted = false;

    try
    {
        const post = await getById(id);

        if (isNotOwner(post, requester.id))
        {
            throw new PostNotFound();
        }

        await deleteData(id);

        deleted = true;

        await publish(requester.id, post.id, post.parentId);
    }
    catch (error)
    {
        logger.logError('Failed to remove post', error);

        if (deleted)
        {
            await undeleteData(id);
        }

        throw error;
    }
}
