
import React from 'react';

import { Row } from '../../../designsystem/module';

import Quantifier from '../../common/Quantifier';

export type Props = {
    postCount: number;
    followerCount: number;
    followingCount: number;
};

export default function Element(props: Props)
{
    return <Row>
        <Quantifier value={props.postCount} text='comics' />
        <Quantifier value={props.followerCount} text='followers' />
        <Quantifier value={props.followingCount} text='following' />
    </Row>;
}
