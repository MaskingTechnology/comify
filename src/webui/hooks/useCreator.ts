
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getCreator from '^/domain/creator/getByNicknameAggregated/feature';
import getRelation from '^/domain/relation/get';
import type RelationView from '^/domain/relation/view/RelationView';

import { useAppContext } from '^/webui/contexts';
import { awaitData } from '^/webui/utils';

export function useCreator()
{
    const { identity } = useAppContext();
    const { nickname } = useParams();

    const [relation, setRelation] = useState<RelationView | undefined>(undefined);

    useEffect(() =>
    {
        if (identity !== undefined && nickname !== undefined)
        {
            const getCreatorRelation = async () =>
            {
                const creator: CreatorView = await getCreator(nickname);

                return getRelation(identity.id, creator.id);
            };

            awaitData(getCreatorRelation, setRelation);
        }
    }, [identity, nickname]);

    return [relation, setRelation] as const;
}
