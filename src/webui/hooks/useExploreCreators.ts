
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useExploreCreators()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => exploreRelations(requester, 'popular');

    useEffect(() => awaitData(getRelations, setRelations), []);

    return [relations, setRelations] as const;
}
