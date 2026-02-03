
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getCreatorPosts from '^/domain/post/getByCreatorAggregated';
import { tenant } from '^/domain/tenant';

export default function useCreatorPosts(creatorId: string)
{
    const limit = 16;

    const getData = useCallback((page: number) =>
    {
        return getCreatorPosts(tenant, requester, creatorId, { limit, offset: page * limit });

    }, [creatorId]);

    return usePagination(getData, limit, [creatorId]);
}
