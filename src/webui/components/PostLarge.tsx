
import React from 'react';

import { Column, Icon, Row, Panel, AvatarProps, ButtonProps } from '../designsystem/designsystem.js';

import Comic from '../elements/Comic.js';
import CreatorResponse from './CreatorResponse.js';
import Reactions from './Reactions.js';
import Reaction from '../elements/Rating.js';
import FixedDynamicTwoColumn from '../elements/FixedDynamicTwoColumn.js';

export type PostLargeProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    image: string;
    likes: number;
    comments: number;
};

export default function PostLarge(props: PostLargeProps)
{
    return <Panel>
        <Column gap='medium' align='justify'>
            <FixedDynamicTwoColumn
                left={props.avatar}
                right={<>
                    <Row align='justify'>
                        <CreatorResponse username={props.username} date={props.responded} />
                        {props.button}
                    </Row>
                </>}
            />
            <Row>
                <Comic source={props.image} />
            </Row>
            <Row>
                <Reactions>
                    <Reaction icon={<Icon type='heart' />} number={props.likes} />
                    <Reaction icon={<Icon type='comment' />} number={props.comments} />
                </Reactions>
            </Row>
        </Column>
    </Panel>;
}
