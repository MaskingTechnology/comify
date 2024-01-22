
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Row } from '../../designsystem/module';

import NamesColumn from './NamesColumn';
import FollowButton from './FollowButton';

export type Props = {
    creator: Creator;
    followHandler: (creator: Creator) => void;
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
