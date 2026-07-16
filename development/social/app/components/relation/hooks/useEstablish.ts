
import { useCallback } from 'react';

import { tenant } from '@comify/common/domain/tenant';

import { requester } from '^/domain/authentication';
import type { Relation } from '^/domain/relation';
import establishRelation from '^/domain/relation/establish';

export default function useEstablish()
{
    return useCallback((relation: Relation) =>
    {
        return establishRelation(tenant, requester, relation.following.id);

    }, []);
}
