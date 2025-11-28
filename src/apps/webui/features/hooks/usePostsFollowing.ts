
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import getPostsFollowing from '^/domain/post/getByFollowingAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '^/webui/hooks';

export default function usePostsFollowing()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsFollowing(tenant, requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
