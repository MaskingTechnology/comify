
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { requester } from '@comify/common/security';
import getRelation from '^/domain/relation/get';

import { useAppContext } from '~/components/application';

export default function useRelation(creatorId?: string)
{
    const { identity } = useAppContext();

    const getCreatorRelation = useCallback(async () =>
    {
        if (identity === undefined || creatorId === undefined)
        {
            return undefined;
        }

        return getRelation(requester, identity.id, creatorId);

    }, [identity, creatorId]);

    return useLoadData(getCreatorRelation, [identity, creatorId]);
}
