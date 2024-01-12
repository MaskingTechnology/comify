
import React from 'react';

import { Column, Panel, Paragraph, Row, AvatarProps } from '../designsystem/designsystem.js';

import CreatorResponse from './CreatorResponse.js';
import FixedDynamicTwoColumn from '../elements/FixedDynamicTwoColumn.js';

export type NotificationProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement;
    text: string;
};

export default function Notification(props: NotificationProps)
{
    return <Panel>
        <Column gap='medium' align='justify'>
            <FixedDynamicTwoColumn
                left={props.avatar}
                right={<>
                    <Row align='justify'>
                        <CreatorResponse username={props.username} date={props.responded} />
                        {props.button}
                    </Row></>
                }
            />
            <Row>
                <Paragraph>
                    {props.text}
                </Paragraph>
            </Row>
        </Column>
    </Panel>;
}
