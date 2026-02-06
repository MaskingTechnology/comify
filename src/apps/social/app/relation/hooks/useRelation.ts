
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { requester } from '^/domain/authentication';
import getRelation from '^/domain/relation/getAggregated';
import { tenant } from '^/domain/tenant';

import { useAppContext } from '~/app/application';

export default function useRelation(creatorId?: string)
{
    const { identity } = useAppContext();

    const getCreatorRelation = useCallback(async () =>
    {
        if (identity === undefined || creatorId === undefined)
        {
            return undefined;
        }

        return getRelation(tenant, requester, identity.id, creatorId);

    }, [identity, creatorId]);

    return useLoadData(getCreatorRelation, [identity, creatorId]);
}
