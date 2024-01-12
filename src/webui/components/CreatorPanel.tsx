
import React from 'react';

import { Panel, Row, AvatarProps, ButtonProps } from '../designsystem/designsystem.js';

import FixedDynamicTwoColumn from '../elements/FixedDynamicTwoColumn.js';
import Quantifier from './Quantifier.js';
import CreatorNames from './CreatorNames.js';


export type CreatorPanelProps = {
    avatar: React.ReactElement<AvatarProps>;
    button: React.ReactElement<ButtonProps>;
    username: string;
    nickname: string;
    comics: number;
    followers: number;
    following: number;
};

export default function CreatorPanel(props: CreatorPanelProps)
{
    return <Panel>
        <FixedDynamicTwoColumn
            left={props.avatar}
            right={<><Row align='justify'>
                <CreatorNames username={props.username} nickname={props.nickname} />
                {props.button}
            </Row>
                <Row>
                    <Quantifier value={props.comics} text='comics' />
                    <Quantifier value={props.followers} text='followers' />
                    <Quantifier value={props.following} text='following' />
                </Row>
            </>}
        />
    </Panel>;
}
