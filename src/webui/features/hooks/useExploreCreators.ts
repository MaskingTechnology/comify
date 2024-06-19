
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { usePagination } from '^/webui/hooks';

export default function useExploreCreators()
{
    const limit = 20;

    const getData = useCallback((page: number) =>
    {
        return exploreRelations(requester, 'popular', undefined, { limit, offset: page * limit });

    }, []);

    return usePagination(getData, limit);
}
