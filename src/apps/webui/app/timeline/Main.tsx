
import { Outlet } from 'react-router-dom';

import { Tabs } from '~/app/common';

const tabItems = [
    { name: 'For you', route: 'foryou' },
    { name: 'Following', route: 'following' }
];

export default function Feature()
{
    return <Tabs items={tabItems}>
        <Outlet />
    </Tabs>;
}
