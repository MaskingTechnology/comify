
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorCounters from '../creator/Counters';

import FollowRow from './elements/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: () => void;
};

export default function Component({ relation, followHandler }: Props)
{
    return <FollowRow isFollowing={relation.exists} followHandler={followHandler}>
        <CreatorCounters creator={relation.creator} />
    </FollowRow>;
}
