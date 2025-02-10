
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated';

import { usePagination } from '^/webui/hooks';

export default function useCreatorPosts(creator: AggregatedCreatorData)
{
    const limit = 16;

    const getData = useCallback((page: number) =>
    {
        return getCreatorPosts(requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
