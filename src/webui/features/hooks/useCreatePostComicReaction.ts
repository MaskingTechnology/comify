
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import createComicReaction from '^/domain/reaction/createComic/feature';
import getReaction from '^/domain/reaction/getByIdAggregated/feature';

export default function useCreatePostComicReaction(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const reactionId = await createComicReaction(requester, imageData, post.id);
        const reaction = await getReaction(requester, reactionId);

        handleDone(reaction);

    }, [post, handleDone]);
}
