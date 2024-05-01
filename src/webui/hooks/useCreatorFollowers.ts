
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import type CreatorView from '^/domain/creator/view/CreatorView';
import getFollowers from '^/domain/relation/getFollowers';
import type RelationView from '^/domain/relation/view/RelationView';

import { awaitData } from '^/webui/utils';

export default function hook(creator: CreatorView)
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => getFollowers(johnDoe, creator.id);

    useEffect(() => awaitData(getRelations, setRelations), [creator]);

    return [relations, setRelations] as const;
}
