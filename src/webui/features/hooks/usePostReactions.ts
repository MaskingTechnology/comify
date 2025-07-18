
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import getReactionsByPost from '^/domain/post/getByParentAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '^/webui/hooks';

export default function usePostReactions(post: AggregatedPostData)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(requester, tenant, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
