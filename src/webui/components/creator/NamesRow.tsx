
import React from 'react';

import type CreatorView from '../../../domain/creator/CreatorView';

import { Row } from '../../designsystem/module';

import NamesColumn from './NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    const creator = props.creator;

    return <Row align='justify'>
        <NamesColumn creator={creator} />
    </Row>;
}
