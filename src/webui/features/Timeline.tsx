

import { Ruler, Tab, Tabs } from '^/webui/designsystem';
import TimelineEverything from './TimelineEverything';
import TimelineFollowing from './TimelineFollowing';

export default function Feature()
{
    return <Tabs separator={<Ruler direction='horizontal' size='small' />}>
        <Tab title='Everything'>
            <TimelineEverything />
        </Tab>
        <Tab title='Following'>
            <TimelineFollowing />
        </Tab>
    </Tabs>;
}
