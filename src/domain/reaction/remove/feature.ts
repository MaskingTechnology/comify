
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import updateReactionCount from '^/domain/post/updateReactionCount/feature';

import ReactionNotFound from './ReactionNotFound';
import deleteData from './deleteData';
import retrieveOwnedData from './retrieveOwnedData';

export default async function feature(requester: Requester, id: string): Promise<void>
{
    // We only delete the reaction itself and do not cascade it towards the comment or comic as it doesn't add
    // any value, and it would make the code more complex.

    const reaction = await retrieveOwnedData(id, requester.id);

    if (reaction === undefined)
    {
        throw new ReactionNotFound();
    }

    let reactionCount;

    try
    {
        reactionCount = await updateReactionCount(reaction.postId, 'decrease');

        await deleteData(reaction.id);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to remove reaction', error);

        if (reactionCount !== undefined)
        {
            await updateReactionCount(reaction.postId, 'increase');
        }

        throw error;
    }
}
