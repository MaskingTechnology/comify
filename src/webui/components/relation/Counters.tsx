
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorCounters from '../creator/Counters';

import FollowRow from './elements/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: () => void;
};

export default function Component(props: Props)
{
    return <FollowRow isFollowing={props.relation.exists} followHandler={props.followHandler}>
        <CreatorCounters creator={props.relation.following} />
    </FollowRow>;
}
