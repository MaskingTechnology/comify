
import { useEffect, useState } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import getFollowers from '^/domain/relation/getFollowersAggregated/feature';

import { awaitData } from '^/webui/utils';

export function useCreatorFollowers(creator: CreatorView)
{
    const limit = 12;
    let offset = 0;

    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    useEffect(() => 
    {
        const getRelations = () => getFollowers(requester, creator.id, { limit, offset });

        awaitData(getRelations, setRelations);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [creator]);

    const getMoreRelations = async () =>
    {
        offset += limit;

        const nextRelations = await getFollowers(requester, creator.id, { limit, offset });

        setRelations(prevRelations => [...(prevRelations ?? []), ...nextRelations]);

        return nextRelations.length < limit;
    };

    return [relations, getMoreRelations] as const;
}
