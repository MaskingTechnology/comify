
import React from 'react';

import { Column, Tabs, Tab, Ruler } from '../designsystem/module';

import CreatorProfile from './CreatorProfile';
import CreatorComics from './CreatorComics';
import CreatorFollowers from './CreatorFollowers';
import CreatorFollowing from './CreatorFollowing';

export default function Feature()
{
    return <Column gap='medium' alignX='stretch'>
        <CreatorProfile />
        <Tabs separator={<Ruler type='horizontal' size='small' />}>
            <Tab title={`Comics (0)`}>
                <CreatorComics />
            </Tab>
            <Tab title={`Followers (0)`}>
                <CreatorFollowers />
            </Tab>
            <Tab title={`Following (0)`}>
                <CreatorFollowing />
            </Tab>
        </Tabs>
    </Column>;
}
