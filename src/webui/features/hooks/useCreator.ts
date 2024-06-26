
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getCreator from '^/domain/creator/getByNicknameAggregated/feature';
import getRelation from '^/domain/relation/getAggregated/feature';

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

        const creator: CreatorView = await getCreator(nickname);

        return getRelation(identity.id, creator.id);

    }, [identity, nickname]);

    return useLoadData(getCreatorRelation, [identity, nickname]);
}
