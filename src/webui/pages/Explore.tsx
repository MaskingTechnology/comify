

import React from 'react';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import ExploreComics from '../features/ExploreComics';
import ExploreCreators from '../features/ExploreCreators';
import Application from './templates/Application';

export default function Page()
{
    return <Application>
        <Tabs separator={<Ruler type='horizontal' size='small' />}>
            <Tab title='Comics'>
                <ExploreComics />
            </Tab>
            <Tab title='Creators'>
                <ExploreCreators />
            </Tab>
        </Tabs>
    </Application>;
}
