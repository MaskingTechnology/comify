
import type { Relation } from '^/domain/relation';

import { Counters } from '~/components/creator';

import FollowRow from './elements/FollowRow';

type Props = {
    readonly relation: Relation;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly onCreatorClick: () => void;
};

export default function ({ relation, onFollowClick, onEditClick, onCreatorClick }: Props)
{
    return <FollowRow
        isFollowing={relation.established}
        isSelf={relation.self}
        onFollowClick={onFollowClick}
        onEditClick={(onEditClick)}
    >
        <Counters
            creator={relation.following}
            onCreatorClick={onCreatorClick}
        />
    </FollowRow>;
}
