
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import getReactionsByPost from '^/domain/reaction/getByPostAggregated';

import { usePagination } from '^/webui/hooks';

export default function useReactions(post: AggregatedPostData)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(requester, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
