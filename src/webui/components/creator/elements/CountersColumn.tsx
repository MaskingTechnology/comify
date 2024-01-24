
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import { Column } from '../../../designsystem/module';

import NamesRow from './NamesRow';
import CountersRow from './CountersRow';

export type Props = {
    creator: CreatorView;
};

export default function Component(props: Props)
{
    return <Column gap='small' align='justify' stretch={true}>
        <NamesRow creator={props.creator} />
        <CountersRow creator={props.creator} />
    </Column>;
}
