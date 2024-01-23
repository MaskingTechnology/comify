
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Row } from '../../designsystem/module';

import TitledTimeElapsed from '../common/TitledTimeElapsed';
import AvatarRow from './AvatarRow';
import FollowButton from './FollowButton';

export type Props = {
    creator: CreatorView;
    date: Date;
    followHandler: (creator: CreatorView) => void;
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
