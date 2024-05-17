
import type Requester from '../authentication/Requester';
import decreaseFollowerCount from '../creator/decreaseFollowerCount';
import increaseFollowerCount from '../creator/increaseFollowerCount';
import increaseFollowingCount from '../creator/increaseFollowingCount';
import createData from './data/createData';
import RelationAlreadyExists from './errors/RelationAlreadyExists';
import erase from './repository/erase';
import exists from './repository/exists';
import insert from './repository/insert';

export default async function establish(requester: Requester, followingId: string): Promise<void>
{
    const relationExists = await exists(requester.id, followingId);

    if (relationExists)
    {
        throw new RelationAlreadyExists();
    }

    let relationId, followerCount;

    try
    {
        const relation = createData(requester.id, followingId);

        relationId = await insert(relation);
        followerCount = await increaseFollowerCount(followingId);

        await increaseFollowingCount(requester.id);
    }
    catch (error: unknown)
    {
        const undoRelation = relationId !== undefined ? erase(relationId) : Promise.resolve();
        const undoFollowerCount = followerCount !== undefined ? decreaseFollowerCount(followingId) : Promise.resolve();

        await Promise.all([undoRelation, undoFollowerCount]);

        throw error;
    }
}
