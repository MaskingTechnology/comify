
import requester from '^/domain/authentication/requester';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useTimelinePosts()
{
    const limit = 6;

    const getData = (page: number) => getTimelinePosts(requester, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
