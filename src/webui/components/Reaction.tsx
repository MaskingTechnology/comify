
import React from 'react';

import { Column, Icon, Row, Panel, AvatarProps, ButtonProps, ParagraphProps, ImageProps } from '../designsystem/designsystem.js';

import CreatorResponse from './CreatorResponse.js';
import Reactions from './Reactions.js';
import Rating from '../elements/Rating.js';

export type ReactionProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    likes: number;
    comment: React.ReactElement<ParagraphProps | ImageProps>;
};

export default function Reaction(props: ReactionProps)
{
    return <Panel>
        <Column gap='small' align='justify'>
            <Row>
                {props.avatar}
                <Column gap='small' align='justify' stretch={true}>
                    <Row align='justify'>
                        <CreatorResponse username={props.username} date={props.responded} />
                        {props.button}
                    </Row>
                </Column>
            </Row>
            <Row>
                {props.comment}
            </Row>
            <Row>
                <Reactions>
                    <Rating icon={<Icon type='heart' />} number={props.likes} />
                </Reactions>
            </Row>
        </Column>
    </Panel>;
}
