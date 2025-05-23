
import logger from '^/integrations/logging';

import type { Requester } from '^/domain/authentication';

import create from '../create';
import erase from '../erase';
import exists from '../exists';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';

export default async function establish(requester: Requester, followingId: string): Promise<void>
{
    let id;

    try
    {
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
