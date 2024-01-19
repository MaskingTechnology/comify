
import React from 'react';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

const navigation = [
    { icon: '/assets/icon1.svg', title: 'Timeline', to: '/timeline' },
    { icon: '/assets/icon2.svg', title: 'Explore', to: '/explore' },
    { icon: '/assets/icon3.svg', title: 'Notifications', to: '/notifications' },
    { icon: '/assets/icon4.svg', title: 'Create', to: '/create' },
    { icon: '/assets/icon5.svg', title: 'Profile', to: '/profile' }
];

export type ApplicationProperties = {
    children: React.ReactNode;
};

const sidebar = <ApplicationSidebar navigation={navigation} />;

export default function Application(props: ApplicationProperties)
{
    return <ApplicationLayout main={props.children} aside={sidebar} />;
}
