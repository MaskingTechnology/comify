
import React from 'react';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import ExploreComics from '../features/ExploreComics';
import ExploreCreators from '../features/ExploreCreators';
import ApplicationTemplate from './templates/Application';

export default function Page()
{
    return <ApplicationTemplate>
        <Tabs separator={<Ruler type='horizontal' size='small' />}>
            <Tab title='Comics'>
                <ExploreComics />
            </Tab>
            <Tab title='Creators'>
                <ExploreCreators />
            </Tab>
        </Tabs>
    </ApplicationTemplate>;
}
