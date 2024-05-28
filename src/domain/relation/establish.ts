
import type Requester from '../authentication/Requester';
import updateFollowerCount from '../creator/updateFollowerCount/feature';
import updateFollowingCount from '../creator/updateFollowingCount/feature';
import create from './data/create';
import erase from './data/erase';
import exists from './data/exists';
import RelationAlreadyExists from './errors/RelationAlreadyExists';

export default async function establish(requester: Requester, followingId: string): Promise<void>
{
    const relationExists = await exists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    let relation, followerCount;

    try
    {
        relation = await create(requester.id, followingId);
        followerCount = await updateFollowerCount(followingId, 'increase');

        await updateFollowingCount(requester.id, 'increase');
    }
    catch (error: unknown)
    {
        const relationId = relation?.id ?? '';

        const undoRelation = relation !== undefined ? erase(relationId) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? updateFollowerCount(followingId, 'decrease') : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount]);

        throw error;
    }
}
