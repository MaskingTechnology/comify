
import logger from '@theshelf/logging';

import type { Requester } from '~/authentication';
import getCreator from '~/creator/getById';
import type { Tenant } from '~/tenant';

import create from '../create';
import erase from '../erase';
import exists from '../exists';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';

export default async function establish(tenant: Tenant, requester: Requester, followingId: string): Promise<void>
{
    let id;

    try
    {
        await getCreator(tenant.id, followingId);

        const relationExists = await exists(requester.id, followingId);

        if (relationExists)
        {
            throw new RelationAlreadyExists();
        }

        id = await create(requester.id, followingId);

        await publish(requester.id, followingId);
    }
    catch (error)
    {
        logger.logError('Failed to establish relation', error);

        if (id !== undefined)
        {
            await erase(id);
        }

        throw error;
    }
}
