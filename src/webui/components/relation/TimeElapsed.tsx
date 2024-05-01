
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorTimeElapsed from '../creator/TimeElapsed';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    date: Date;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onEditClick?: (relation: RelationView) => void;
    onCreatorClick: (relation: RelationView) => void;
};

export default function Component({ relation, date, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <FollowRow
        isFollowing={relation.exists}
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
