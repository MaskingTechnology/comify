
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column } from '^/webui/designsystem';

import Panel from './Panel';

type Props = {
    readonly relations: RelationView[];
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onEditClick?: (relation: RelationView) => void;
    readonly onCreatorClick: (relation: RelationView) => void;
};

export default function Component({ relations, onFollowClick, onEditClick, onCreatorClick }: Props)
{
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
