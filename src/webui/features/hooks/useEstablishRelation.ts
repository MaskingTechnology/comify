
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';
import establishRelation from '^/domain/relation/establish';
import { tenant } from '^/domain/tenant';

export default function useEstablishRelation()
{
    return useCallback((relation: AggregatedRelationData) =>
    {
        return establishRelation(tenant, requester, relation.following.id);

    }, []);
}
