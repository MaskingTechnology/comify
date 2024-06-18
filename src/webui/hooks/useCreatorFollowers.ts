
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getFollowers from '^/domain/relation/getFollowersAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useCreatorFollowers(creator: CreatorView)
{
    const limit = 12;

    const load = (page: number) => getFollowers(requester, creator.id, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}