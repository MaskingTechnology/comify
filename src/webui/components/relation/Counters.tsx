
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorCounters from '../creator/Counters';
import FollowRow from './elementary/FollowRow';

export type Props = {
    readonly relation: RelationView;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly onCreatorClick: () => void;
};

export default function Component({ relation, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <FollowRow
        isFollowing={relation.exists}
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
