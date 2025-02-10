
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import getFollowers from '^/domain/relation/getFollowersAggregated';

import { usePagination } from '^/webui/hooks';

export default function useCreatorFollowers(creator: AggregatedCreatorData)
{
    const limit = 12;

    const getData = useCallback((page: number) =>
    {
        return getFollowers(requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
