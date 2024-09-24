
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import get from '^/domain/reaction/getByIdAggregated/feature';

import { useLoadData } from '^/webui/hooks';

export default function useReaction()
{
    const { reactionId } = useParams();

    const getReaction = useCallback(async () =>
    {
        return reactionId !== undefined
            ? get(requester, reactionId)
            : undefined;
    }, [reactionId]);

    return useLoadData(getReaction, [reactionId]);
}