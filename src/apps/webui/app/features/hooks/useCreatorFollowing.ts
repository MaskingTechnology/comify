
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import getFollowing from '^/domain/relation/getFollowingAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '../../hooks';

export default function useCreatorFollowing(creator: AggregatedCreatorData)
{
    const limit = 12;

    const getData = useCallback((page: number) =>
    {
        return getFollowing(tenant, requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
