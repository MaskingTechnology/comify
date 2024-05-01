
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorProfile from '../creator/Profile';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onEditClick?: (relation: RelationView) => void;
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
