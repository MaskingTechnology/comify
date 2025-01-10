
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import remove from '^/domain/reaction/remove';

export default function useRemoveReaction(reactions: AggregatedReactionData[], setReactions: (reactions: AggregatedReactionData[]) => void)
{
    return useCallback(async (reaction: AggregatedReactionData) =>
    {
        const result = reactions.filter(item => item.id !== reaction.id);

        setReactions(result);

        await remove(requester, reaction.id);

    }, [reactions, setReactions]);
}
