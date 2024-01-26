
import React from 'react';

import { Button } from '../../../designsystem/module';

export type Props = {
    isFollowing: boolean;
    followHandler: () => void;
};

export default function Element(props: Props)
{
    return <Button
        type={props.isFollowing ? 'disabled' : 'primary'}
        text={props.isFollowing ? 'Following' : 'Follow'}
        clickHandler={props.followHandler}
    />;
}
