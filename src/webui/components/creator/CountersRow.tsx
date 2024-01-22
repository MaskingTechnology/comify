
import React from 'react';

import type Creator from '../../../domain/client/views/Creator';

import { Row } from '../../designsystem/module';

import Quantifier from '../common/Quantifier';

export type Props = {
    creator: Creator;
};

export default function Component(props: Props)
{
    const creator = props.creator;
    const comicCount = creator.comicCount ?? 0;
    const followerCount = creator.followerCount ?? 0;
    const followingCount = creator.followingCount ?? 0;

    return <Row>
        <Quantifier value={comicCount} text='comics' />
        <Quantifier value={followerCount} text='followers' />
        <Quantifier value={followingCount} text='following' />
    </Row>;
}
