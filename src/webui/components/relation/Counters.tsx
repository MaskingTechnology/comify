
import type RelationView from '../../../domain/relation/view/RelationView';
import CreatorCounters from '../creator/Counters';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
};

export default function Component({ relation, followHandler, profileHandler }: Props)
{
    return <FollowRow isFollowing={relation.exists} followHandler={followHandler}>
        <CreatorCounters creator={relation.creator} profileHandler={profileHandler} />
    </FollowRow>;
}
