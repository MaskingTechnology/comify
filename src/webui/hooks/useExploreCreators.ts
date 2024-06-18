
import requester from '^/domain/authentication/requester';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { useLoadAndAppendData } from '^/webui/utils';

export function useExploreCreators()
{
    const limit = 20;

    const load = (page: number) => exploreRelations(requester, 'popular', undefined, { limit, offset: page * limit });

    return useLoadAndAppendData(load, limit);
}
