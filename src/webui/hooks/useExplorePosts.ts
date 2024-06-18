
import requester from '^/domain/authentication/requester';
import explorePosts from '^/domain/post/exploreAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useExplorePosts()
{
    const limit = 6;

    const load = (page: number) => explorePosts(requester, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
