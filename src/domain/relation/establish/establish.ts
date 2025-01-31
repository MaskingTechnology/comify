
import logger from '^/integrations/logging';

import { Requester } from '^/domain/authentication';

import createData from './createData';
import dataExists from './dataExists';
import eraseData from './eraseData';
import insertData from './insertData';
import publish from './publish';
import RelationAlreadyExists from './RelationAlreadyExists';
import validateData from './validateData';

export default async function establish(requester: Requester, followingId: string): Promise<void>
{
    const relationExists = await dataExists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    let id;

    try
    {
        const data = createData(requester.id, followingId);

        validateData(data);

        id = await insertData(data);

        publish(requester.id, followingId);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to establish relation', error);

        const undoRelation = id !== undefined ? eraseData(id) : Promise.resolve();

        await undoRelation;

        throw error;
    }
}
