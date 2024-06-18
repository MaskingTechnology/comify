
import requester from '^/domain/authentication/requester';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { usePagination } from '^/webui/utils';

export function useExploreCreators()
{
    const limit = 20;

    const getData = (page: number) => exploreRelations(requester, 'popular', undefined, { limit, offset: page * limit });

    return usePagination(getData, limit);
}
