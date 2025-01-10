
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import updateFollowerCount from '^/domain/creator/updateFollowerCount/feature';
import updateFollowingCount from '^/domain/creator/updateFollowingCount/feature';

import createNotification from '^/domain/notification/create/feature';
import { Types } from '^/domain/notification/definitions';
import createData from './createData';
import dataExists from './dataExists';
import eraseData from './eraseData';
import insertData from './insertData';
import RelationAlreadyExists from './RelationAlreadyExists';
import validateData from './validateData';

export default async function feature(requester: Requester, followingId: string): Promise<void>
{
    const relationExists = await dataExists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    let id, followerCount;

    try
    {
        const data = createData(requester.id, followingId);

        validateData(data);

        id = await insertData(data);

        followerCount = await updateFollowerCount(followingId, 'increase');

        await updateFollowingCount(requester.id, 'increase');

        await createNotification(Types.STARTED_FOLLOWING, requester.id, followingId);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to establish relation', error);

        const undoRelation = id !== undefined ? eraseData(id) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? updateFollowerCount(followingId, 'decrease') : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount]);

        throw error;
    }
}
