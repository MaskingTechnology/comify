
import type { Identifier } from '@comify/common/primitives/identifier';
import { type Requester } from '@comify/common/security';

import { logger } from '../integrations';
import retrieveById from '../_retrieveById';

import isNotOwner from './isNotOwner';
import publish from './publish';
import markDeleted from './markDeleted';
import markUndeleted from './markUndeleted';

export default async function (requester: Requester, id: Identifier): Promise<void>
{
    // We only delete the post itself and do not cascade it towards it's children as it doesn't add
    // any value, and it would make the code more complex.

    let deleted = false;

    try
    {
        const record = await retrieveById(requester.tenantId, id);

        if (isNotOwner(record, requester.principalId))
        {
            // Fail silently
            return;
        }

        await markDeleted(id);

        deleted = true;

        await publish(requester.tenantId, requester.principalId, record.id, record.parentId);
    }
    catch (error)
    {
        logger.error('Failed to remove post', error);

        if (deleted)
        {
            await markUndeleted(id);
        }

        throw error;
    }
}
