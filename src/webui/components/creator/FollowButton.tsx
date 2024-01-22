
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Button } from '../../designsystem/module';

export type Props = {
    creator: Creator;
    followHandler: (creator: Creator) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const relation = creator.relation;
    const followHandler = props.followHandler;

    const isFollowing = relation !== undefined;

    return <Button
        type={isFollowing ? 'disabled' : 'primary'}
        text={isFollowing ? 'Following' : 'Follow'}
        clickHandler={() => followHandler(creator)}
    />;
}
