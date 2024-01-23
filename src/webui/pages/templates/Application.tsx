
import React from 'react';

import ImageView from '../../../domain/image/ImageView';
import CreatorView from '../../../domain/creator/CreatorView';

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

const portrait = new ImageView('https://masking.tech/images/peter.jpg');
const identity = new CreatorView('0', 'Peter van Vliet', 'Peterrrr', portrait, new Date(), 0, 0, 0);

export default function Application(props: ApplicationProperties)
{
    const children = props.children;

    const sidebar = <ApplicationSidebar navigation={navigation} identity={identity} />;

    return <ApplicationLayout main={children} aside={sidebar} />;
}
