
import React from 'react';

import { Button } from '../../../designsystem/module';

export type Props = {
    isFollowing: boolean;
    followHandler: () => void;
};

export default function Component({ isFollowing, followHandler }: Props)
{
    return <Button
        type={isFollowing ? 'disabled' : 'primary'}
        text={isFollowing ? 'Following' : 'Follow'}
        clickHandler={followHandler}
    />;
}
