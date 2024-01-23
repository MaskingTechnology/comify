
import { Row } from '../../designsystem/module';

import type RelationView from '../../../domain/relation/RelationView';

import CreatorPropertiesRow from '../creator/PropertiesRow';

import FollowButton from './FollowButton';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
};

export default function Component(props: Props)
{
    const relation = props.relation;
    const creator = relation.creator;

    return <Row align='justify' stretch={true}>
        <CreatorPropertiesRow creator={creator} />
        <FollowButton relation={relation} followHandler={props.followHandler} />
    </Row>;
}
