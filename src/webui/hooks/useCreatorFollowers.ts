
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import getFollowers from '^/domain/relation/getFollowersAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorFollowers(creator: CreatorView)
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getRelations = () => getFollowers(johnDoe, creator.id);

        awaitData(getRelations, setRelations);

    }, [creator]);

    return [relations, setRelations] as const;
}
