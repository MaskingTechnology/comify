
import { Outlet } from 'react-router-dom';

import { Tabs } from '~/components/common';

const tabItems = [
    { title: 'For you', route: 'foryou' },
    { title: 'Following', route: 'following' }
];

export default function Feature()
{
    return <Tabs items={tabItems}>
        <Outlet />
    </Tabs>;
}
