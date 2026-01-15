
import { Outlet } from 'react-router-dom';

import { Tabs } from '~/app/common';

const tabItems = [
    { name: 'Comics', route: 'comics' },
    { name: 'Creators', route: 'creators' }
];

export default function Feature()
{
    return <Tabs items={tabItems}>
        <Outlet />
    </Tabs>;
}
