
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import remove from '^/domain/reaction/remove/feature';

export default function useRemoveReaction(reactions: ReactionView[], setReactions: (reactions: ReactionView[]) => void)
{
    return useCallback(async (reaction: ReactionView) =>
    {
        const result = reactions.filter(item => item.id !== reaction.id);

        setReactions(result);

        await remove(requester, reaction.id);

    }, [reactions, setReactions]);
}
