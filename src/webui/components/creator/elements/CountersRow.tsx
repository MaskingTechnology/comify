
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import { Row } from '../../../designsystem/module';

import Quantifier from '../../common/Quantifier';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <Row>
        <Quantifier value={props.creator.comicCount} text='comics' />
        <Quantifier value={props.creator.followerCount} text='followers' />
        <Quantifier value={props.creator.followingCount} text='following' />
    </Row>;
}
