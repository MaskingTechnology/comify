
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import createCommentReaction from '^/domain/post/createWithComment';
import getReaction from '^/domain/post/getByIdAggregated';
import { tenant } from '^/domain/tenant';

export default function useCreateCommentReaction(post: AggregatedPostData, handleDone: (reaction?: AggregatedPostData) => void)
{
    return useCallback(async (comment: string) =>
    {
        const reactionId = await createCommentReaction(requester, tenant, comment, post.id);
        const reaction = await getReaction(requester, tenant, reactionId);

        handleDone(reaction);

    }, [post, handleDone]);
}
