
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import get from '^/domain/post/getByIdAggregated';
import { tenant } from '^/domain/tenant';

import { useLoadData } from '^/webui/hooks';

export default function useReaction()
{
    const { highlightId } = useParams();

    const getReaction = useCallback(async () =>
    {
        return highlightId !== undefined
            ? get(requester, tenant, highlightId)
            : undefined;
    }, [highlightId]);

    return useLoadData(getReaction, [highlightId]);
}
