
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Counters } from '~/app/creator';

import FollowRow from './elements/FollowRow';

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
        <Counters
            creator={relation.following}
            onCreatorClick={onCreatorClick}
        />
    </FollowRow>;
}
