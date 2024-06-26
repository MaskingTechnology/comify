
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import establishRelation from '^/domain/relation/establish/feature';

export default function useEstablishRelation()
{
    return useCallback((relation: RelationView) =>
    {
        return establishRelation(requester, relation.following.id);

    }, []);
}
