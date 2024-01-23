
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorTimeElapsedRow from '../creator/TimeElapsedRow';

import FollowButton from './FollowButton';

export type Props = {
    relation: RelationView;
    date: Date;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const relation = props.relation;
    const creator = relation.creator;
    const date = props.date;

    return <Row align='justify' stretch={true}>
        <CreatorTimeElapsedRow creator={creator} date={date} />
        <FollowButton relation={relation} followHandler={props.followHandler} />
    </Row>;
}
