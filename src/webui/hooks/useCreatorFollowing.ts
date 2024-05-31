
import { useEffect, useState } from 'react';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import getFollowing from '^/domain/relation/getFollowingAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorFollowing(creator: CreatorView)
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getRelations = () => getFollowing(requester, creator.id);

        awaitData(getRelations, setRelations);

    }, [creator]);

    return [relations, setRelations] as const;
}
