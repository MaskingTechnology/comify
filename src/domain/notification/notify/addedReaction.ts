
import { Types } from '../definitions';

import create from '../create';

export default async function addedReaction(senderId: string, receiverId: string, sourceReactionId: string, targetPostId?: string, targetReactionId?: string): Promise<void>
{
    const type = targetPostId !== undefined ? Types.ADDED_REACTION_POST : Types.ADDED_REACTION_REACTION;

    return create(type, senderId, receiverId, targetPostId, targetReactionId, sourceReactionId);
}
