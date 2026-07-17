
import logger from '@comify/common/integrations/logging';

import type { Requester } from '~/authentication';
import type { Tenant } from '@comify/common/domain/tenant';

import retrieveById from '../_retrieveById';

import isNotOwner from './isNotOwner';
import publish from './publish';
import deleteRecord from './deleteRecord';
import undeleteRecord from './undeleteRecord';

export default async function remove(tenant: Tenant, requester: Requester, id: string): Promise<void>
{
    // We only delete the post itself and do not cascade it towards it's children as it doesn't add
    // any value, and it would make the code more complex.

    let deleted = false;

    try
    {
        const post = await retrieveById(tenant.id, id);

        if (isNotOwner(post, requester.id))
        {
            // Fail silently
            return;
        }

        await deleteRecord(id);

        deleted = true;

        await publish(requester.id, post.id, post.parentId);
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

export { default as subscribe } from './subscribe';
