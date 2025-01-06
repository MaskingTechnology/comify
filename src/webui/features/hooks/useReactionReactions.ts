
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import getReactionsByReaction from '^/domain/reaction/getByReactionAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useReactionReactions(reaction: ReactionView)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByReaction(requester, reaction.id, { limit, offset: page * limit });

    }, [reaction]);

    return usePagination(getData, limit, [reaction]);
}
