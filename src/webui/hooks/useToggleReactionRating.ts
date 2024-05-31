
import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import toggleRating from '^/domain/reaction/toggleRating/feature';

export function useToggleReactionRating()
{
    return (reaction: ReactionView) =>
    {
        return toggleRating(requester, reaction.id);
    };
}
