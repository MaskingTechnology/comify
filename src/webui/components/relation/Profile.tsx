
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorProfile from '../creator/Profile';
import FollowRow from './elementary/FollowRow';

export type Props = {
    readonly relation: RelationView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onEditClick?: (relation: RelationView) => void;
};

export default function Component({ relation, onFollowClick, onEditClick }: Props)
{
    return <FollowRow
        isFollowing={relation.exists}
        isSelf={relation.self}
        onFollowClick={() => onFollowClick(relation)}
        onEditClick={onEditClick !== undefined ? () => onEditClick(relation) : undefined}
    >
        <CreatorProfile creator={relation.following} />
    </FollowRow>;
}
