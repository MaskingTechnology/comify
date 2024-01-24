
import { Row } from '../../../designsystem/module';

import type RelationView from '../../../../domain/relation/RelationView';

import FollowButton from './FollowButton';

export type Props = {
    relation: RelationView;
    followHandler: (relation: RelationView) => void;
    children: React.ReactNode;
};

export default function Component(props: Props)
{
    return <Row align='justify' stretch={true}>
        {props.children}
        <FollowButton relation={props.relation} followHandler={props.followHandler} />
    </Row>;
}
