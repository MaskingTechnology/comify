
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useReactions(post: PostView)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(requester, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
