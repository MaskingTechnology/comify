
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import toggleRating from '^/domain/reaction/toggleRating';

export default function useToggleReactionRating()
{
    return useCallback((reaction: AggregatedReactionData) =>
    {
        return toggleRating(requester, reaction.id);

    }, []);
}
