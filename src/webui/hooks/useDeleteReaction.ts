
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import remove from '^/domain/reaction/remove/feature';

export function useDeleteReaction(reactions: ReactionView[], setReactions: (reactions: ReactionView[]) => void)
{
    return async (reaction: ReactionView) =>
    {
        const result = reactions.filter(item => item.id !== reaction.id);

        setReactions(result);

        await remove(requester, reaction.id);
    };
}
