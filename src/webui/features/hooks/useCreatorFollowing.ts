
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getFollowing from '^/domain/relation/getFollowingAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useCreatorFollowing(creator: CreatorView)
{
    const limit = 12;

    const getData = useCallback((page: number) =>
    {
        return getFollowing(requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
