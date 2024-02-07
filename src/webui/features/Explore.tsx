
import React from 'react';

import { Tabs, Tab, Ruler } from '../designsystem/module';

import ExploreComics from './ExploreComics';
import ExploreCreators from './ExploreCreators';

export default function Feature()
{
    return <Tabs separator={<Ruler type='horizontal' size='small' />}>
        <Tab title='Comics'>
            <ExploreComics />
        </Tab>
        <Tab title='Creators'>
            <ExploreCreators />
        </Tab>
    </Tabs>;
}
