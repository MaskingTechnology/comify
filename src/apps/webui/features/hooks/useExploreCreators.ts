
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import exploreRelations from '^/domain/relation/exploreAggregated';
import { tenant } from '^/domain/tenant';

import { usePagination } from '^/hooks';

export default function useExploreCreators()
{
    const limit = 20;

    const getData = useCallback((page: number) =>
    {
        return exploreRelations(tenant, requester, 'popular', { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
