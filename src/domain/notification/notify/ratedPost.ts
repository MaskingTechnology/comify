
import { Types } from '../definitions';

import create from '../create';

export default async function ratedPost(senderId: string, receiverId: string, postId: string): Promise<void>
{
    return create(Types.RATED_POST, senderId, receiverId, postId);
}
