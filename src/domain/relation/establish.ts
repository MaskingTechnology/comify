
import type Requester from '../authentication/Requester';
import decreaseFollowerCount from '../creator/decreaseFollowerCount';
import increaseFollowerCount from '../creator/increaseFollowerCount';
import increaseFollowingCount from '../creator/increaseFollowingCount';
import removeRelation from '../relation/data/remove';
import createRelation from './data/create';
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
        relation = await createRelation(requester.id, followingId);
        followerCount = await increaseFollowerCount(followingId);
        await increaseFollowingCount(requester.id);
    }
    catch (error: unknown)
    {
        const relationId = relation?.id ?? '';
        const undoRelation = relation !== undefined ? removeRelation(relationId) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? decreaseFollowerCount(followingId) : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount]);

        throw error;
    }
}
