
import type Requester from '^/domain/authentication/Requester';
import updateFollowerCount from '^/domain/creator/updateFollowerCount/feature';
import updateFollowingCount from '^/domain/creator/updateFollowingCount/feature';

import RelationAlreadyExists from './RelationAlreadyExists';
import createData from './createData';
import dataExists from './dataExists';
import eraseData from './eraseData';
import insertData from './insertData';

export default async function establish(requester: Requester, followingId: string): Promise<void>
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

        id = await insertData(data);

        followerCount = await updateFollowerCount(followingId, 'increase');

        await updateFollowingCount(requester.id, 'increase');
    }
    catch (error: unknown)
    {
        const undoRelation = id !== undefined ? eraseData(id) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? updateFollowerCount(followingId, 'decrease') : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount]);

        throw error;
    }
}
