
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import getCreator from '^/domain/creator/getByNicknameAggregated';
import getRelation from '^/domain/relation/getAggregated';
import { tenant } from '^/domain/tenant';

import { useAppContext } from '^/webui/contexts';
import { useLoadData } from '^/webui/hooks';

export default function useCreator()
{
    const { identity } = useAppContext();
    const { nickname } = useParams();

    const getCreatorRelation = useCallback(async () =>
    {
        if (identity === undefined || nickname === undefined)
        {
            return undefined;
        }

        const creator = await getCreator(tenant, requester, nickname);

        return getRelation(tenant, requester, identity.id, creator.id);

    }, [identity, nickname]);

    return useLoadData(getCreatorRelation, [identity, nickname]);
}
