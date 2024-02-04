
import React from 'react';

import ImageView from '../../../domain/image/view/ImageView';
import CreatorView from '../../../domain/creator/view/CreatorView';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

export type Props = {
    children: React.ReactNode;
};

const IMAGE_URL = 'https://masking.tech/images/peter.jpg';

const portrait = new ImageView(IMAGE_URL);
const identity = new CreatorView('0', 'Peter van Vliet', 'petermasking', portrait, new Date(), 0, 0, 0);

export default function Template({ children }: Props)
{
    const sidebar = <ApplicationSidebar identity={identity} />;

    return <ApplicationLayout main={children} aside={sidebar} />;
}
