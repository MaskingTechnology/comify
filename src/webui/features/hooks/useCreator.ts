
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import getCreator from '^/domain/creator/getByNicknameAggregated';
import getRelation from '^/domain/relation/getAggregated';

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

        const creator = await getCreator(requester, nickname);

        return getRelation(identity.id, creator.id);

    }, [identity, nickname]);

    return useLoadData(getCreatorRelation, [identity, nickname]);
}
