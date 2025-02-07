
import create from '../create';
import { Types } from '../definitions';

export default async function startedFollowing(followerId: string, followingId: string): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
