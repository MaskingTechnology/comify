
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Row } from '../../designsystem/module';

import NamesColumn from './NamesColumn';
import FollowButton from './FollowButton';

export type Props = {
    creator: CreatorView;
    followHandler: (creator: CreatorView) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const followHandler = props.followHandler;

    return <Row align='justify'>
        <NamesColumn creator={creator} />
        <FollowButton creator={creator} followHandler={followHandler} />
    </Row>;
}
