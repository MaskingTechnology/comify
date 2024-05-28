
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/feature';
import getFollowers from '^/domain/relation/getFollowers';
import type RelationView from '^/domain/relation/view/RelationView';

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
