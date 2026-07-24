
import logger from '@comify/common/integrations/logging';
import { type Requester } from '@comify/common/security';

import retrieveById from '../_retrieveById';

import isNotOwner from './isNotOwner';
import publish from './publish';
import deleteRecord from './deleteRecord';
import undeleteRecord from './undeleteRecord';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards it's children as it doesn't add
    // any value, and it would make the code more complex.

    let deleted = false;

    try
    {
        const post = await retrieveById(requester.tenantId, id);

        if (isNotOwner(post, requester.principalId))
        {
            // Fail silently
            return;
        }

        await deleteRecord(id);

        deleted = true;

        await publish(requester.tenantId, requester.principalId, post.id);
    }
    catch (error)
    {
        logger.error('Failed to remove post', error);

        if (deleted)
        {
            await undeleteRecord(id);
        }

        throw error;
    }
}
