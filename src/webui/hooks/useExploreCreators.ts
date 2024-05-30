
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import exploreRelations from '^/domain/relation/exploreAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useExploreCreators()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => exploreRelations(johnDoe, 'popular');

    useEffect(() => awaitData(getRelations, setRelations), []);

    return [relations, setRelations] as const;
}
