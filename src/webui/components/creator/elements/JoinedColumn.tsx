
import React from 'react';

import { Column, Text } from '../../../designsystem/module';

import NamesRow from './NamesRow';

export type Props = {
    fullName: string;
    nickName: string;
    joinedAt: Date;
};

export default function Component(props: Props)
{
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const joinedAt = props.joinedAt ?? new Date();
    const joinedText = 'Joined ' + joinedAt.toLocaleDateString('en-GB', options);

    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={props.fullName} nickName={props.nickName} />
        <Text value={joinedText} size='small' />
    </Column>;
}
