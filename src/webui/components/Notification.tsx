
import React from 'react';

import { Column, Paragraph, Row } from '../designsystem/designsystem.js';
import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';

import CreatorResponded from './CreatorResponded.js';

export type NotificationProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement;
    text: string;
};

export default function Notification(props: NotificationProps)
{
    return <Column gap='small' align='justify'>
        <Row>
            {props.avatar}
            <Column gap='small' align='justify' stretch={true}>
                <Row align='justify'>
                    <CreatorResponded username={props.username} responded={props.responded} />
                    {props.button}
                </Row>
            </Column>
        </Row>
        <Row>
            <Paragraph>
                {props.text}
            </Paragraph>
        </Row>
    </Column>;
}
