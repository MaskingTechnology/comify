
import { Types } from '../definitions';

import create from '../create';

export default async function createdPost(senderId: string, receiverId: string | undefined, postId: string): Promise<void>
{
    if (receiverId === undefined)
    {
        return;
    }

    return create(Types.REACTED_TO_POST, senderId, receiverId, postId);
}
