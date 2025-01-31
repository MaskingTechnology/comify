
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';

import PostNotFound from '../PostNotFound';

import removeData from './deleteData';
import ownsData from './ownsData';
import publish from './publish';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards the reactions as it doesn't add
    // any value, and it would make the code more complex.

    const isOwner = await ownsData(id, requester.id);

    if (isOwner === false)
    {
        throw new PostNotFound();
    }

    try
    {
        await removeData(id);

        publish(requester.id, id);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to remove post', error);

        throw error;
    }
}
