
import logger from '^/integrations/logging';

import type { Requester } from '^/domain/authentication/types';
import updatePostReactionCount from '^/domain/post/updateReactionCount';
import ReactionNotFound from '^/domain/reaction/ReactionNotFound';
import updateReactionReactionCount from '^/domain/reaction/updateReactionCount/feature';

import deleteData from './deleteData';
import retrieveOwnedData from './retrieveOwnedData';

export default async function remove(requester: Requester, id: string): Promise<void>
{
    // We only delete the reaction itself and do not cascade it towards the comment or comic as it doesn't add
    // any value, and it would make the code more complex.

    const reaction = await retrieveOwnedData(id, requester.id);

    if (reaction === undefined)
    {
        throw new ReactionNotFound();
    }

    let postReactionCount;
    let reactionReactionCount;

    try
    {
        if (reaction.postId !== undefined)
        {
            postReactionCount = await updatePostReactionCount(reaction.postId, 'decrease');
        }

        if (reaction.reactionId !== undefined)
        {
            reactionReactionCount = await updateReactionReactionCount(reaction.reactionId, 'decrease');
        }

        await deleteData(reaction.id);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to remove reaction', error);

        if (postReactionCount !== undefined)
        {
            await updatePostReactionCount(reaction.postId as string, 'increase');
        }

        if (reactionReactionCount !== undefined)
        {
            await updateReactionReactionCount(reaction.reactionId as string, 'increase');
        }

        throw error;
    }
}
