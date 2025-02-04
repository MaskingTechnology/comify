
import { Types } from '../definitions';

import create from '../create';

export default async function startedFollowing(followerId: string, followingId: string): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
