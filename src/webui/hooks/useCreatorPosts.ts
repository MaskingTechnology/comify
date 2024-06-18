
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useCreatorPosts(creator: CreatorView)
{
    const limit = 16;

    const load = (page: number) => getCreatorPosts(requester, creator.id, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
