
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
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow creator={props.creator} />
        <CountersRow creator={props.creator} />
    </Column>;
}
