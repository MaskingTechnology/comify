
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
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

        const creator: AggregatedCreatorData = await getCreator(nickname);

        return getRelation(identity.id, creator.id);

    }, [identity, nickname]);

    return useLoadData(getCreatorRelation, [identity, nickname]);
}
