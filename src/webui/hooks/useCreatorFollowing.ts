
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getFollowing from '^/domain/relation/getFollowingAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useCreatorFollowing(creator: CreatorView)
{
    const limit = 12;

    const getData = (page: number) => getFollowing(requester, creator.id, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
