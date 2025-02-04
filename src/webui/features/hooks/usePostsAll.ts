
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import getPostsAll from '^/domain/post/getAllAggregated';

import { usePagination } from '^/webui/hooks';

export default function usePostsAll()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getPostsAll(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
