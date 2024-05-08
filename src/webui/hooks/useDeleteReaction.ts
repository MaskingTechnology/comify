
import johnDoe from '^/domain/authentication/johnDoe';
import remove from '^/domain/reaction/remove';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export function useDeleteReaction(reactions: ReactionView[], setReactions: (reactions: ReactionView[]) => void)
{
    return async (reaction: ReactionView) =>
    {
        const result = reactions.filter(item => item.id !== reaction.id);

        setReactions(result);

        await remove(johnDoe, reaction.id);
    };
}
