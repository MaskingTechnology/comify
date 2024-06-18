
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useCreatorPosts(creator: CreatorView)
{
    const limit = 16;

    const getData = (page: number) => getCreatorPosts(requester, creator.id, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
