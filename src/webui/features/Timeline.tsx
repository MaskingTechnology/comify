
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import { usePathParam } from '^/webui/hooks';

import TimelineFollowing from './TimelineFollowing';
import TimelineForYou from './TimelineForYou';

export default function Feature()
{
    const [tab, setTab] = usePathParam('tab', 'foryou');

    const separator = <Ruler direction='horizontal' size='small' />;

    return <Tabs selectedId={tab} onChange={setTab} separator={separator}>
        <Tab id='foryou' title='For you'>
            <TimelineForYou />
        </Tab>
        <Tab id='following' title='Following'>
            <TimelineFollowing />
        </Tab>
    </Tabs>;
}
