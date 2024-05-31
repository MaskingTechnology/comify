
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import CreatorProfile from '../creator/Profile';
import FollowRow from './elementary/FollowRow';

type Props = {
    readonly relation: RelationView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onEditClick?: () => void;
};

export default function Component({ relation, onFollowClick, onEditClick }: Props)
{
    return <FollowRow
        isFollowing={relation.established}
        isSelf={relation.self}
        onFollowClick={() => onFollowClick(relation)}
        onEditClick={onEditClick}
    >
        <CreatorProfile creator={relation.following} />
    </FollowRow>;
}
