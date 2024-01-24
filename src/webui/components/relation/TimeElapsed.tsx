
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorTimeElapsed from '../creator/TimeElapsed';

import FollowRow from './elements/FollowRow';

export type Props = {
    relation: RelationView;
    date: Date;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    return <FollowRow relation={props.relation} followHandler={props.followHandler}>
        <CreatorTimeElapsed creator={props.relation.creator} date={props.date} />
    </FollowRow>;
}
