
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import CreatorCounters from '../creator/Counters';
import FollowRow from './elementary/FollowRow';

type Props = {
    readonly relation: AggregatedRelationData;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly onCreatorClick: () => void;
};

export default function Component({ relation, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <FollowRow
        isFollowing={relation.established}
        isSelf={relation.self}
        onFollowClick={onFollowClick}
        onEditClick={(onEditClick)}
    >
        <CreatorCounters
            creator={relation.following}
            onCreatorClick={onCreatorClick}
        />
    </FollowRow>;
}
