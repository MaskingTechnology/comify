
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { TimeElapsed } from '~/app/creator';

import FollowRow from './elements/FollowRow';

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
        <TimeElapsed
            creator={relation.following}
            date={date}
            onCreatorClick={() => onCreatorClick(relation)}
        />
    </FollowRow>;
}
