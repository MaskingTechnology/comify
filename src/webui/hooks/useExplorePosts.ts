
import requester from '^/domain/authentication/requester';
import explorePosts from '^/domain/post/exploreAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useExplorePosts()
{
    const limit = 6;

    const getData = (page: number) => explorePosts(requester, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
