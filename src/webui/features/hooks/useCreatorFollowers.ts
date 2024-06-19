
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getFollowers from '^/domain/relation/getFollowersAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useCreatorFollowers(creator: CreatorView)
{
    const limit = 12;

    const getData = useCallback((page: number) =>
    {
        return getFollowers(requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
