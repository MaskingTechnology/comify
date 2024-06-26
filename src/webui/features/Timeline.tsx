

import { Ruler, Tab, Tabs } from '^/webui/designsystem';
import TimelineEverything from './TimelineEverything';
import TimelineFollowing from './TimelineFollowing';

export default function Feature()
{
    return <Tabs separator={<Ruler direction='horizontal' size='small' />}>
        <Tab id='everything' title='Everything'>
            <TimelineEverything />
        </Tab>
        <Tab id='following' title='Following'>
            <TimelineFollowing />
        </Tab>
    </Tabs>;
}
