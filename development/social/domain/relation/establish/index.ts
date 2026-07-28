
import { type Requester } from '@comify/common/security';

import getCreator from '~/creator/_retrieveById';

import { logger } from '../integrations';
import exists from '../exists';

import create from './create';
import erase from './erase';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';

export default async function run(requester: Requester, followingId: string): Promise<void>
{
    const key = { followerId: requester.principalId, followingId };

    let id;

    try
    {
        await getCreator(requester.tenantId, followingId);

        const relationExists = await exists(key);

        if (relationExists)
        {
            throw new RelationAlreadyExists();
        }

        id = await create(requester.principalId, followingId);

        await publish(requester.principalId, followingId);
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

export { default as InvalidRelation } from './InvalidRelation';
export { default as RelationAlreadyExists } from './RelationAlreadyExists';
