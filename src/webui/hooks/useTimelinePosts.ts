

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getTimelinePosts from '^/domain/post/timelineAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useTimelinePosts()
{
    const limit = 6;
    let offset = 0;

    const loadPosts = (page: number) => getTimelinePosts(requester, { limit, offset: page * limit });

    return useLoadAndAppendData<PostView>(loadPosts, limit);
}
