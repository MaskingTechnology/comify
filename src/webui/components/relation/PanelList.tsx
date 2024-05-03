
import type RelationView from '^/domain/relation/view/RelationView';

import { Column } from '^/webui/designsystem';

import NoResults from '../common/NoResults';
import Panel from './Panel';

export type Props = {
    readonly relations: RelationView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onEditClick?: (relation: RelationView) => void;
    readonly onCreatorClick: (relation: RelationView) => void;
};

export default function Component({ relations, onFollowClick, onEditClick, onCreatorClick }: Props)
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
                    onFollowClick={() => onFollowClick(relation)}
                    onEditClick={onEditClick !== undefined ? () => onEditClick(relation) : undefined}
                    onCreatorClick={() => onCreatorClick(relation)}
                />
            )
        }
    </Column>;
}
