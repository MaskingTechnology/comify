
import { Row } from '../../../designsystem/module';

import FollowButton from './FollowButton';

export type Props = {
    isFollowing: boolean;
    followHandler: () => void;
    children: React.ReactNode;
};

export default function Element(props: Props)
{
    return <Row alignX='justify' alignY='top'>
        {props.children}
        <FollowButton isFollowing={props.isFollowing} followHandler={props.followHandler} />
    </Row>;
}
