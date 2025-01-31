
import { Types } from '../definitions';

import create from '../create';

export default async function postRated(senderId: string, receiverId: string, targetPostId: string): Promise<void>
{
    return create(Types.RATED_POST, senderId, receiverId, targetPostId);
}
