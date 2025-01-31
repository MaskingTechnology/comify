
import { Types } from '../definitions';

import create from '../create';

export default async function ratedReaction(senderId: string, receiverId: string, targetReactionId: string): Promise<void>
{
    return create(Types.RATED_REACTION, senderId, receiverId, undefined, targetReactionId);
}
