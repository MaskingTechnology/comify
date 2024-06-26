
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useCreatorPosts(creator: CreatorView)
{
    const limit = 16;

    const getData = useCallback((page: number) =>
    {
        return getCreatorPosts(requester, creator.id, { limit, offset: page * limit });

    }, [creator]);

    return usePagination(getData, limit, [creator]);
}
