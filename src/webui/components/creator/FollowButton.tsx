
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Button } from '../../designsystem/module';

export type Props = {
    creator: CreatorView;
    followHandler: (creator: CreatorView) => void;
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
