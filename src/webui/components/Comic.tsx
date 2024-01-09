
import React from 'react';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';
import { ButtonProps } from '../designsystem/elements/button/Button.js';
import { Column, Icon, Row } from '../designsystem/designsystem.js';
import CreatorResponded from './CreatorResponded.js';
import Reactions from './Reactions.js';
import Reaction from './Reaction.js';

export type ComicProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    responded: Date;
    button: React.ReactElement<ButtonProps>;
    image: string;
    likes: number;
    comments: number;
};

export default function Comic(props: ComicProps)
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
            <img src={props.image} alt='Comic' />
        </Row>
        <Row>
            <Reactions>
                <Reaction icon={<Icon type='heart' />} number={props.likes} />
                <Reaction icon={<Icon type='comment' />} number={props.comments} />
            </Reactions>
        </Row>
    </Column>;
}
