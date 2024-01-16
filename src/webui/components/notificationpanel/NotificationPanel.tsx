
import React from 'react';

import { Column, Panel, Row, AvatarProps, ParagraphProps, ButtonProps } from '../../designsystem/module';

import CreatorResponse from '../creatorresponse/CreatorResponse';
import FixedDynamicTwoColumn from '../fixeddynamictwocolumn/FixedDynamicTwoColumn';

export type NotificationPanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    message: React.ReactElement<ParagraphProps>;
};

export default function NotificationPanel(props: NotificationPanelProps)
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
                {props.message}
            </Row>
        </Column>
    </Panel>;
}
