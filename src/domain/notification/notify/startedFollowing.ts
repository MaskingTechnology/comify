
import { Types } from '../definitions';

import create from '../create';

export default async function startedFollowing(senderId: string, receiverId: string): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, senderId, receiverId);
}
