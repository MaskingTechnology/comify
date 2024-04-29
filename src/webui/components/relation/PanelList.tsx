
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem/module';

import NoResults from '../common/NoResults';
import Panel from './Panel';

export type Props = {
    relations: RelationView[];
    followHandler: (relation: RelationView) => Promise<void>;
    profileHandler: (relation: RelationView) => void;
    editHandler: (relation: RelationView) => void;
};

export default function Component({ relations, followHandler, profileHandler, editHandler }: Props)
{
    if (relations.length === 0)
    {
        return <NoResults />;
    }

    return <Column gap='medium' alignX='stretch'>
        {
            relations.map(relation =>
                <Panel
                    key={relation.following.id}
                    relation={relation}
                    followHandler={() => followHandler(relation)}
                    profileHandler={() => profileHandler(relation)}
                    editHandler={() => editHandler(relation)}
                />
            )
        }
    </Column>;
}
