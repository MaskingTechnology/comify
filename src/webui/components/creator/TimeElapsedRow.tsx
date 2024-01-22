
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Row } from '../../designsystem/module';

import TitledTimeElapsed from '../common/TitledTimeElapsed';
import AvatarRow from './AvatarRow';
import FollowButton from './FollowButton';

export type Props = {
    creator: Creator;
    date: Date;
    followHandler: (creator: Creator) => void;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const date = props.date;
    const followHandler = props.followHandler;

    return <AvatarRow avatarSize='small' creator={creator}>
        <Row align='justify' stretch={true}>
            <TitledTimeElapsed title={creator.fullName} date={date} />
            <FollowButton creator={creator} followHandler={followHandler} />
        </Row>
    </AvatarRow>;
}
