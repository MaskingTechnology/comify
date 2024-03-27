
import type Requester from '../authentication/Requester';
import decreaseFollowerCount from '../creator/decreaseFollowerCount';
import decreaseFollowingCount from '../creator/decreaseFollowingCount';
import increaseFollowerCount from '../creator/increaseFollowerCount';
import increaseFollowingCount from '../creator/increaseFollowingCount';
import removeRelation from '../relation/data/remove';
import create from './data/create';
import exists from './data/exists';
import RelationAlreadyExists from './errors/RelationAlreadyExists';

export default async function establish(requester: Requester, followingId: string): Promise<void>
{
    const relationExists = await exists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    let relation, followerCount, followingCount;

    try
    {
        relation = await create(requester.id, followingId);
        followerCount = await increaseFollowerCount(followingId);
        followingCount = await increaseFollowingCount(requester.id);

    }
    catch (error: unknown)
    {
        const relationId = relation?.id ?? '';
        const undoRelation = relation !== undefined ? removeRelation(relationId) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? decreaseFollowerCount(followingId) : Promise.resolve();
        const undoFollowingCount = followingCount !== undefined ? decreaseFollowingCount(requester.id) : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount, undoFollowingCount]);

        throw error;
    }
}
