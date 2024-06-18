
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getFollowing from '^/domain/relation/getFollowingAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useCreatorFollowing(creator: CreatorView)
{
    const limit = 12;

    const load = (page: number) => getFollowing(requester, creator.id, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
