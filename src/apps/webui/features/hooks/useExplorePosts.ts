
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import explorePosts from '^/domain/post/exploreAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '^/hooks';

export default function useExplorePosts()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return explorePosts(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
