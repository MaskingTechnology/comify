
import { subscribe as subscribeToReactionCreated } from '^/domain/reaction/create';

import updateReactionCount from './updateReactionCount';

async function subscribe(): Promise<void>
{
    await subscribeToReactionCreated((creatorId, reactionId, targetCreatorId, targetPostId) =>
    {
        if (targetPostId === undefined)
        {
            return;
        }

        return updateReactionCount(targetPostId, 'increase');
    });
}

export default subscribe();
