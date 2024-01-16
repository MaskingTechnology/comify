
import React from 'react';

import { Row, Column, Text, AvatarProps, ButtonProps } from '../../designsystem/module';

import Names from './Names';

export type CreatorCardProps = {
    avatar: React.ReactElement<AvatarProps>;
    button: React.ReactElement<ButtonProps>;
    username: string;
    nickname: string;
    joined: Date;
};

export default function CreatorCard(props: CreatorCardProps)
{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedText = 'Joined ' + props.joined.toLocaleDateString('en-GB', options);

    return <Row>
        {props.avatar}
        <Column gap='small' align='justify' stretch={true}>
            <Row align='justify'>
                <Names username={props.username} nickname={props.nickname} />
                {props.button}
            </Row>
            <Row>
                <Text value={joinedText} size='small' />
            </Row>
        </Column>
    </Row>;
}
