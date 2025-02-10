
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import CreatorTimeElapsed from '../creator/TimeElapsed';
import FollowRow from './elementary/FollowRow';

type Props = {
    readonly relation: AggregatedRelationData;
    readonly date: string;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onEditClick?: (relation: AggregatedRelationData) => void;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
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
