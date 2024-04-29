
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorCounters from '../creator/Counters';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
    editHandler: () => void;
};

export default function Component({ relation, followHandler, profileHandler, editHandler }: Props)
{

    return <FollowRow isFollowing={relation.exists} isSelf={relation.self} followHandler={followHandler} editHandler={(editHandler)}>
        <CreatorCounters creator={relation.following} profileHandler={profileHandler} />
    </FollowRow>;
}
