
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorCounters from '../creator/Counters';

import FollowRow from './elements/FollowRow';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    return <FollowRow relation={props.relation} followHandler={props.followHandler}>
        <CreatorCounters creator={props.relation.creator} />
    </FollowRow>;
}
