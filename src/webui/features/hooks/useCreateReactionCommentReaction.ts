
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import createCommentReaction from '^/domain/reaction/createComment/feature';
import getReaction from '^/domain/reaction/getByIdAggregated/feature';

export default function useCreateCommentReaction(sourceReaction: ReactionView, handleDone: (reaction?: ReactionView) => void)
{
    return useCallback(async (comment: string) =>
    {
        const targetReactionId = await createCommentReaction(requester, comment, undefined, sourceReaction.id);
        const reaction = await getReaction(requester, targetReactionId);

        handleDone(reaction);

    }, [sourceReaction, handleDone]);
}
