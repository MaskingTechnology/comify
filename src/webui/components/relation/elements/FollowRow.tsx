
import { Row } from '../../../designsystem/module';

import FollowButton from './FollowButton';

export type Props = {
    isFollowing: boolean;
    followHandler: () => void;
    children: React.ReactNode;
};

export default function Element({ isFollowing, followHandler, children }: Props)
{
    return <Row alignX='justify' alignY='top'>
        {children}
        <FollowButton isFollowing={isFollowing} followHandler={followHandler} />
    </Row>;
}
