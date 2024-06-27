
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import explorePosts from '^/domain/post/exploreAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useExplorePosts()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return explorePosts(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
