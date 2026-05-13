
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import explorePosts from '^/domain/post/exploreAggregated';
import { tenant } from '^/domain/tenant';

export default function useExplorePosts()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return explorePosts(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
