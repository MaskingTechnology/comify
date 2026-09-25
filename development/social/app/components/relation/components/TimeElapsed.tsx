
import { type Relation } from '^/domain/relation';

import { TimeElapsed } from '~/components/creator';

import FollowRow from './elements/FollowRow';

type Props = {
    readonly relation: Relation;
    readonly date: Date;
    readonly onFollowClick: (relation: Relation) => Promise<void>;
    readonly onEditClick?: (relation: Relation) => void;
    readonly onCreatorClick: (relation: Relation) => void;
};

export default function ({ relation, date, onFollowClick, onEditClick, onCreatorClick }: Props)
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
