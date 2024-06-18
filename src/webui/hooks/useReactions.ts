
import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useReactions(post: PostView)
{
    const limit = 15;

    const getData = (page: number) => getReactionsByPost(requester, post.id, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
