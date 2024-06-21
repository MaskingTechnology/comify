
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import { usePathParam } from '^/webui/hooks';

import ExploreComics from './ExploreComics';
import ExploreCreators from './ExploreCreators';

export default function Feature()
{
    const [tab, setTab] = usePathParam(2, 'comics');

    const separator = <Ruler direction='horizontal' size='small' />;

    return <Tabs selectedId={tab} onChange={setTab} separator={separator}>
        <Tab id='comics' title='Comics'>
            <ExploreComics />
        </Tab>
        <Tab id='creators' title='Creators'>
            <ExploreCreators />
        </Tab>
    </Tabs>;
}
