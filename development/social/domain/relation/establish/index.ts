
import logger from '@comify/common/integrations/logging';

import type { Requester } from '~/authentication';
import getCreator from '~/creator/_retrieveById';
import type { Tenant } from '@comify/common/domain/tenant';

import create from '../_create';
import erase from '../_erase';
import exists from '../exists';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';

export default async function run(tenant: Tenant, requester: Requester, followingId: string): Promise<void>
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
        logger.error('Failed to establish relation', error);

        if (id !== undefined)
        {
            await erase(id);
        }

        throw error;
    }
}

export { default as subscribe } from './subscribe';

export { default as RelationAlreadyExists } from './RelationAlreadyExists';
