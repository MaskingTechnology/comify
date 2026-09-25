
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import { type Relation } from '^/domain/relation';
import establishRelation from '^/domain/relation/establish';

export default function useEstablish()
{
    return useCallback((relation: Relation) =>
    {
        return establishRelation(requester, relation.following.id);

    }, []);
}
