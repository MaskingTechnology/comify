
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Profile } from '~/app/creator';

import FollowRow from './elements/FollowRow';

type Props = {
    readonly relation: AggregatedRelationData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
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
