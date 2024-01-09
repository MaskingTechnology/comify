
import React from 'react';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';
import { ButtonProps } from '../designsystem/elements/button/Button.js';
import { Row, Column, Text } from '../designsystem/designsystem.js';

import CreatorNames from './CreatorNames.js';

export type CreatorProfileProps = {
    avatar: React.ReactElement<AvatarProps>;
    button: React.ReactElement<ButtonProps>;
    username: string;
    nickname: string;
    joined: Date;
};

export default function CreatorProfile(props: CreatorProfileProps)
{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedText = 'Joined ' + props.joined.toLocaleDateString('en-GB', options);

    return <Row>
        {props.avatar}
        <Column gap='small' align='justify' stretch={true}>
            <Row align='justify'>
                <CreatorNames username={props.username} nickname={props.nickname} />
                {props.button}
            </Row>
            <Row>
                <Text value={joinedText} size='small' />
            </Row>
        </Column>
    </Row>;
}
