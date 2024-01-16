
import React from 'react';

import { Panel as DSPanel, Row, AvatarProps, ButtonProps } from '../../designsystem/module';

import AvatarWithContentRight from './AvatarWithContentRight';
import Quantifier from '../common/Quantifier';
import Names from './Names';


export type PanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    button: React.ReactElement<ButtonProps>;
    username: string;
    nickname: string;
    comics: number;
    followers: number;
    following: number;
};

export default function Panel(props: PanelProps)
{
    return <DSPanel>
        <AvatarWithContentRight
            avatar={props.avatar}
            right={<>
                <Row align='justify'>
                    <Names username={props.username} nickname={props.nickname} />
                    {props.button}
                </Row>
                <Row>
                    <Quantifier value={props.comics} text='comics' />
                    <Quantifier value={props.followers} text='followers' />
                    <Quantifier value={props.following} text='following' />
                </Row>
            </>}
        />
    </DSPanel>;
}
