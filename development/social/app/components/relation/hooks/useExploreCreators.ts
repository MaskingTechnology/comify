
import { useCallback } from 'react';

import { usePagination } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import exploreRelations from '^/domain/relation/exploreAggregated';
import { tenant } from '^/domain/tenant';

export default function useExploreCreators()
{
    const limit = 20;

    const getData = useCallback((page: number) =>
    {
        return exploreRelations(tenant, requester, 'popular', { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
