
import type { Relation } from '^/domain/relation';

import { Column } from '@maskingtech/designsystem';

import Panel from './Panel';

type Props = {
    readonly relations: Relation[];
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onEditClick?: (relation: Relation) => void;
    readonly onCreatorClick: (relation: Relation) => void;
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
