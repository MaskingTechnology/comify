
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import createCommentReaction from '^/domain/reaction/createWithComment';
import getReaction from '^/domain/reaction/getByIdAggregated';

export default function useCreateCommentReaction(sourceReaction: AggregatedReactionData, handleDone: (reaction?: AggregatedReactionData) => void)
{
    return useCallback(async (comment: string) =>
    {
        const targetReactionId = await createCommentReaction(requester, comment, undefined, sourceReaction.id);
        const reaction = await getReaction(requester, targetReactionId);

        handleDone(reaction);

    }, [sourceReaction, handleDone]);
}
