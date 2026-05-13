
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getFollowers from '^/domain/relation/getFollowersAggregated';
import { tenant } from '^/domain/tenant';

export default function useCreatorFollowers(creatorId?: string)
{
    const limit = 12;

    const getData = useCallback(async (page: number) =>
    {
        if (creatorId === undefined)
        {
            return [];
        }
        
        return getFollowers(tenant, requester, creatorId, { limit, offset: page * limit });

    }, [creatorId]);

    return usePagination(getData, limit, [creatorId]);
}
