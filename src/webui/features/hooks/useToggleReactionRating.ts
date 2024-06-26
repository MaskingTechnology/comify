
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import toggleRating from '^/domain/reaction/toggleRating/feature';

export default function useToggleReactionRating()
{
    return useCallback((reaction: ReactionView) =>
    {
        return toggleRating(requester, reaction.id);

    }, []);
}
