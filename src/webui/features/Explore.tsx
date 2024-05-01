
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

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
