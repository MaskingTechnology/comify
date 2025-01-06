
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import createComicReaction from '^/domain/reaction/createComic/feature';
import getReaction from '^/domain/reaction/getByIdAggregated/feature';

export default function useCreateReactionComicReaction(sourceReaction: ReactionView, handleDone: (reaction?: ReactionView) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const targetReactionId = await createComicReaction(requester, imageData, undefined, sourceReaction.id);
        const reaction = await getReaction(requester, targetReactionId);

        handleDone(reaction);

    }, [sourceReaction, handleDone]);
}
