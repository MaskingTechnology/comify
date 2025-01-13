
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import createComicReaction from '^/domain/reaction/createWithComic';
import getReaction from '^/domain/reaction/getByIdAggregated';

export default function useCreatePostComicReaction(post: AggregatedPostData, handleDone: (reaction?: AggregatedReactionData) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const reactionId = await createComicReaction(requester, imageData, post.id);
        const reaction = await getReaction(requester, reactionId);

        handleDone(reaction);

    }, [post, handleDone]);
}
