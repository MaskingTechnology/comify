
import React from 'react';

import { Column, Icon, Row, Panel, AvatarProps, ButtonProps } from '../../designsystem/module';

import Comic from '../comic/Comic';
import Response from '../creator/Response';
import Engagements from '../common/engagements/Engagements';
import Engagement from '../common/engagements/Engagement';
import AvatarWithContentRight from '../creator/AvatarWithContentRight';

export type LargePanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    image: string;
    likes: number;
    comments: number;
};

export default function LargePanel(props: LargePanelProps)
{
    return <Panel>
        <Column gap='medium' align='justify'>
            <AvatarWithContentRight
                avatar={props.avatar}
                right={<>
                    <Row align='justify'>
                        <Response username={props.username} date={props.responded} />
                        {props.button}
                    </Row>
                </>}
            />
            <Row>
                <Comic source={props.image} />
            </Row>
            <Row>
                <Engagements>
                    <Engagement icon={<Icon type='heart' />} number={props.likes} />
                    <Engagement icon={<Icon type='comment' />} number={props.comments} />
                </Engagements>
            </Row>
        </Column>
    </Panel>;
}
