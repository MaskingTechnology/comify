
import React from 'react';

import ImageView from '../../../domain/image/ImageView';
import CreatorView from '../../../domain/creator/CreatorView';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

const IMAGE_URL = 'https://masking.tech/images/peter.jpg';

export type Props = {
    children: React.ReactNode;
};

const portrait = new ImageView(IMAGE_URL);
const identity = new CreatorView('0', 'Peter van Vliet', 'petermasking', portrait, new Date(), 0, 0, 0);

export default function Template({ children }: Props)
{
    const sidebar = <ApplicationSidebar identity={identity} />;

    return <ApplicationLayout main={children} aside={sidebar} />;
}
