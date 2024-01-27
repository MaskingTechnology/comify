
import React from 'react';

import ImageView from '../../../domain/image/ImageView';
import CreatorView from '../../../domain/creator/CreatorView';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

const IMAGE_URL = 'https://masking.tech/images/peter.jpg';

const navigation = [
    { icon: IMAGE_URL, title: 'Timeline', to: '/timeline' },
    { icon: IMAGE_URL, title: 'Explore', to: '/explore' },
    { icon: IMAGE_URL, title: 'Notifications', to: '/notifications' },
    { icon: IMAGE_URL, title: 'Create', to: '/create' },
    { icon: IMAGE_URL, title: 'Profile', to: '/profile' }
];

export type Props = {
    children: React.ReactNode;
};

const portrait = new ImageView(IMAGE_URL);
const identity = new CreatorView('0', 'Peter van Vliet', 'Peterrrr', portrait, new Date(), 0, 0, 0);

export default function Template({ children }: Props)
{
    const sidebar = <ApplicationSidebar navigation={navigation} identity={identity} />;

    return <ApplicationLayout main={children} aside={sidebar} />;
}
