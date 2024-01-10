
import React from 'react';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';
import { ButtonProps } from '../designsystem/elements/button/Button.js';
import { Column, Icon, Row } from '../designsystem/designsystem.js';
import { ParagraphProps } from '../designsystem/elements/paragraph/Paragraph.js';
import CreatorResponded from './CreatorResponded.js';
import Reactions from './Reactions.js';
import Reaction from './Reaction.js';
import { ImageProps } from '../designsystem/elements/image/Image.js';

export type CommentProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    likes: number;
    comment: React.ReactElement<ParagraphProps | ImageProps>;
};

export default function Comment(props: CommentProps)
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
            {props.comment}
        </Row>
        <Row>
            <Reactions>
                <Reaction icon={<Icon type='heart' />} number={props.likes} />
            </Reactions>
        </Row>
    </Column>;
}
