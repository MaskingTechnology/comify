
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import getPostsRecommended from '^/domain/post/getRecommendedAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '^/webui/hooks';

export default function usePostsRecommended()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsRecommended(requester, tenant, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
