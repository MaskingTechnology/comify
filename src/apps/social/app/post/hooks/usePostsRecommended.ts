
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getPostsRecommended from '^/domain/post/getRecommendedAggregated';
import { tenant } from '^/domain/tenant';

export default function usePostsRecommended()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsRecommended(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
