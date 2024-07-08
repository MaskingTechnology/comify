
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import { usePathParam } from '^/webui/hooks';

import TimelineEverything from './TimelineEverything';
import TimelineFollowing from './TimelineFollowing';

export default function Feature()
{
    const [tab, setTab] = usePathParam('tab', 'everything');

    const separator = <Ruler direction='horizontal' size='small' />;

    return <Tabs selectedId={tab} onChange={setTab} separator={separator}>
        <Tab id='everything' title='Everything'>
            <TimelineEverything />
        </Tab>
        <Tab id='following' title='Following'>
            <TimelineFollowing />
        </Tab>
    </Tabs>;
}
