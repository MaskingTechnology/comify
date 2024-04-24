
import React from 'react';

import { Row } from '^/webui/designsystem/module';

import FollowButton from './FollowButton';

export type Props = {
    isFollowing: boolean;
    followHandler: () => Promise<void>;
    children: React.ReactNode;
};

export default function Component({ isFollowing, followHandler, children }: Props)
{
    return <Row alignX='justify' alignY='top'>
        {children}
        <FollowButton isFollowing={isFollowing} followHandler={followHandler} />
    </Row>;
}
