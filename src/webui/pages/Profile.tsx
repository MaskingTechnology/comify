
import React from 'react';

import { Column, Tabs, Tab, Ruler } from '../designsystem/module';

import CreatorProfile from '../features/CreatorProfile';
import CreatorComics from '../features/CreatorComics';
import CreatorFollowers from '../features/CreatorFollowers';
import CreatorFollowing from '../features/CreatorFollowing';
import ApplicationTemplate from './templates/Application';

export default function Page()
{
    return <ApplicationTemplate>
        <Column gap='medium' alignX='stretch'>
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
        </Column>
    </ApplicationTemplate>;
}
