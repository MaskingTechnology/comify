
import React from 'react';

import ImageView from '../../../domain/image/ImageView';
import CreatorView from '../../../domain/creator/CreatorView';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

const navigation = [
    { icon: 'https://masking.tech/images/peter.jpg', title: 'Timeline', to: '/timeline' },
    { icon: 'https://masking.tech/images/peter.jpg', title: 'Explore', to: '/explore' },
    { icon: 'https://masking.tech/images/peter.jpg', title: 'Notifications', to: '/notifications' },
    { icon: 'https://masking.tech/images/peter.jpg', title: 'Create', to: '/create' },
    { icon: 'https://masking.tech/images/peter.jpg', title: 'Profile', to: '/profile' }
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
