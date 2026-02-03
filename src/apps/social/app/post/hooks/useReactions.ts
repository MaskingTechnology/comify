
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import getReactionsByPost from '^/domain/post/getByParentAggregated';
import { tenant } from '^/domain/tenant';

export default function useReactions(post: AggregatedPostData)
{
    const limit = 15;

    const getData = useCallback((page: number) =>
    {
        return getReactionsByPost(tenant, requester, post.id, { limit, offset: page * limit });

    }, [post]);

    return usePagination(getData, limit, [post]);
}
