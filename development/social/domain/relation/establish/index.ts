
import { type Requester } from '@comify/common/security';

import { type RelationKey } from '../definitions';
import { logger } from '../integrations';

import create from './create';
import exists from './exists';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';
import remove from './remove';

export default async function (requester: Requester, followingId: string): Promise<void>
{
    const key: RelationKey = { followerId: requester.principalId, followingId };

    const relationExists = await exists(key);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    await create(key);

    try
    {
        await publish(requester, key);
    }
    catch (error)
    {
        logger.error('Failed to establish relation', error);

        await remove(key);

        throw error;
    }
}

export { RelationAlreadyExists };
