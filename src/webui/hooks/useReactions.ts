
import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useReactions(post: PostView)
{
    const limit = 15;

    const load = (page: number) => getReactionsByPost(requester, post.id, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
