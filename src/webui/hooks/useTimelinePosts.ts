
import requester from '^/domain/authentication/requester';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useTimelinePosts()
{
    const limit = 6;

    const load = (page: number) => getTimelinePosts(requester, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
