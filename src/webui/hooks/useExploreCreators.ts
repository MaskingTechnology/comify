
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useExploreCreators()
{
    const limit = 20;
    let offset = 0;

    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getInitialRelations = () => exploreRelations(requester, 'popular', undefined, { limit, offset });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => awaitData(getInitialRelations, setRelations), []);

    const getMoreRelations = async () =>
    {
        offset += limit;

        const nextRelations = await exploreRelations(requester, 'popular', undefined, { limit, offset });

        setRelations(prevRelations => [...(prevRelations ?? []), ...nextRelations]);

        return nextRelations.length < limit;
    };

    return [relations, getMoreRelations] as const;
}
