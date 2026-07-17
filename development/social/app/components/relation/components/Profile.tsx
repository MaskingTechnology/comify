
import type { Relation } from '^/domain/relation';

import { Profile } from '~/components/creator';

import FollowRow from './elements/FollowRow';

type Props = {
    readonly relation: Relation;
    readonly onFollowClick: (relation: Relation) => Promise<void>;
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
        <Profile creator={relation.following} />
    </FollowRow>;
}
