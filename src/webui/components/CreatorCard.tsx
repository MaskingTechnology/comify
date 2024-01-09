
import React from 'react';

import Quantifier from './Quantifier.js';
import CreatorNames from './CreatorNames.js';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';
import { ButtonProps } from '../designsystem/elements/button/Button.js';
import { Column, Row } from '../designsystem/designsystem.js';

export type CreatorCardProps = {
    avatar: React.ReactElement<AvatarProps>;
    button: React.ReactElement<ButtonProps>;
    username: string;
    nickname: string;
    comics: number;
    followers: number;
    following: number;
};

export default function CreatorCard(props: CreatorCardProps)
{
    return <Row>
        {props.avatar}
        <Column gap='small' align='justify' stretch={true}>
            <Row align='justify'>
                <CreatorNames username={props.username} nickname={props.nickname} />
                {props.button}
            </Row>
            <Row>
                <Quantifier value={props.comics} text='comics' />
                <Quantifier value={props.followers} text='followers' />
                <Quantifier value={props.following} text='following' />
            </Row>
        </Column>
    </Row>;
}
