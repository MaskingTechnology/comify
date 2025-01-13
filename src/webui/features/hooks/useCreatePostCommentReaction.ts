
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import createCommentReaction from '^/domain/reaction/createWithComment';
import getReaction from '^/domain/reaction/getByIdAggregated';

export default function useCreateCommentReaction(post: AggregatedPostData, handleDone: (reaction?: AggregatedReactionData) => void)
{
    return useCallback(async (comment: string) =>
    {
        const reactionId = await createCommentReaction(requester, comment, post.id);
        const reaction = await getReaction(requester, reactionId);

        handleDone(reaction);

    }, [post, handleDone]);
}
