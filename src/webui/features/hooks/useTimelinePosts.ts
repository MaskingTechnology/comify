
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useTimelinePosts()
{
    const limit = 6;

    const getData = useCallback((page: number) =>
    {
        return getTimelinePosts(requester, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
