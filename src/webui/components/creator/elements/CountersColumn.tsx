
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

export default function Element({ fullName, nickName, postCount, followerCount, followingCount }: Props)
{
    return <Column gap='small' alignY='justify' alignX='stretch'>
        <NamesRow fullName={fullName} nickName={nickName} />
        <CountersRow postCount={postCount} followerCount={followerCount} followingCount={followingCount} />
    </Column>;
}
