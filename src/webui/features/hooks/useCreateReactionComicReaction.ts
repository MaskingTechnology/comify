
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import createComicReaction from '^/domain/reaction/createWithComic';
import getReaction from '^/domain/reaction/getByIdAggregated';

export default function useCreateReactionComicReaction(sourceReaction: AggregatedReactionData, handleDone: (reaction?: AggregatedReactionData) => void)
{
    return useCallback(async (imageData: string) =>
    {
        const targetReactionId = await createComicReaction(requester, imageData, undefined, sourceReaction.id);
        const reaction = await getReaction(requester, targetReactionId);

        handleDone(reaction);

    }, [sourceReaction, handleDone]);
}
