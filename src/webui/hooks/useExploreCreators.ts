
import { useEffect, useState } from 'react';

import johnDoe from '^/domain/authentication/johnDoe';
import SortOptions from '^/domain/relation/definitions/SortOptions';
import exploreRelations from '^/domain/relation/explore';
import type RelationView from '^/domain/relation/view/RelationView';

import { awaitData } from '^/webui/utils/module';

export default function hook()
{
    const [relations, setRelations] = useState<RelationView[] | undefined>(undefined);

    const getRelations = () => exploreRelations(johnDoe, SortOptions.POPULAR);

    useEffect(() => awaitData(getRelations, setRelations), []);

    return [relations, setRelations] as const;
}
