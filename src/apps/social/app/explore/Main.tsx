
import { Outlet } from 'react-router-dom';

import { Tabs } from '~/app/common';

const tabItems = [
    { title: 'Comics', route: 'comics' },
    { title: 'Creators', route: 'creators' }
];

export default function Feature()
{
    return <Tabs items={tabItems}>
        <Outlet />
    </Tabs>;
}
