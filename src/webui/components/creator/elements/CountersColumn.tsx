
import React from 'react';

import { Column } from '../../../designsystem/module';

import NamesRow from './NamesRow';
import CountersRow from './CountersRow';

export type Props = {
    fullName: string;
    nickName: string;
    postCount: number;
    followerCount: number;
    followingCount: number;
};

export default function Component(props: Props)
{
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={props.fullName} nickName={props.nickName} />
        <CountersRow postCount={props.postCount} followerCount={props.followerCount} followingCount={props.followingCount} />
    </Column>;
}
