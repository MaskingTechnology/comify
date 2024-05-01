
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getCreator from '^/domain/creator/getByNickname';
import type CreatorView from '^/domain/creator/view/CreatorView';
import getRelation from '^/domain/relation/get';
import type RelationView from '^/domain/relation/view/RelationView';

import { useAppContext } from '^/webui/contexts/module';
import { awaitData } from '^/webui/utils/module';

export default function hook()
{
    const { identity } = useAppContext();
    const { nickname } = useParams();

    const [relation, setRelation] = useState<RelationView | undefined>(undefined);

    if (identity !== undefined && nickname !== undefined)
    {
        const getCreatorRelation = () => getCreator(nickname).then((creator: CreatorView) => getRelation(identity.id, creator.id));

        useEffect(() => awaitData(getCreatorRelation, setRelation), [identity, nickname]);
    }

    return [relation, setRelation] as const;
}
