
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column } from '^/webui/designsystem';

import Panel from './Panel';

type Props = {
    readonly relations: AggregatedRelationData[];
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onEditClick?: (relation: AggregatedRelationData) => void;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
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
