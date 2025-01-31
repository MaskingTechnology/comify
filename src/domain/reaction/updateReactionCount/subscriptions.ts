
import { subscribe as subscribeToReactionCreated } from '^/domain/reaction/create';

import updateReactionCount from './updateReactionCount';

async function subscribe(): Promise<void>
{
    await subscribeToReactionCreated((creatorId, reactionId, targetCreatorId, targetPostId, targetReactionId) =>
    {
        if (targetReactionId === undefined)
        {
            return;
        }

        return updateReactionCount(targetReactionId, 'increase');
    });
}

export default subscribe();
