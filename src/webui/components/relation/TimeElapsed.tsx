
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import CreatorTimeElapsed from '../creator/TimeElapsed';
import FollowRow from './elementary/FollowRow';

type Props = {
    readonly relation: RelationView;
    readonly date: string;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onEditClick?: (relation: RelationView) => void;
    readonly onCreatorClick: (relation: RelationView) => void;
};

export default function Component({ relation, date, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <FollowRow
        isFollowing={relation.established}
        isSelf={relation.self}
        onFollowClick={() => onFollowClick(relation)}
        onEditClick={onEditClick !== undefined ? () => onEditClick(relation) : undefined}
    >
        <CreatorTimeElapsed
            creator={relation.following}
            date={date}
            onCreatorClick={() => onCreatorClick(relation)}
        />
    </FollowRow>;
}
