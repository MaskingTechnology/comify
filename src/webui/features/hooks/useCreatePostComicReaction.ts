
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import createComicReaction from '^/domain/post/createWithComic';
import getReaction from '^/domain/post/getByIdAggregated';
import { tenant } from '^/domain/tenant';

export default function useCreatePostComicReaction(post: AggregatedPostData, handleDone: (reaction?: AggregatedPostData) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const reactionId = await createComicReaction(tenant, requester, imageData, post.id);
        const reaction = await getReaction(tenant, requester, reactionId);

        handleDone(reaction);

    }, [post, handleDone]);
}
