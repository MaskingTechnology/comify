
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useLoadData } from '@maskingtech/react-toolkit';

import requester from '^/domain/authentication/requester';
import get from '^/domain/post/getByIdAggregated';
import { tenant } from '^/domain/tenant';

export default function useReaction()
{
    const { highlightId } = useParams();

    const getReaction = useCallback(async () =>
    {
        return highlightId !== undefined
            ? get(tenant, requester, highlightId)
            : undefined;
    }, [highlightId]);

    return useLoadData(getReaction, [highlightId]);
}
