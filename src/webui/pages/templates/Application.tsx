
import React from 'react';

import type CreatorView from '../../../domain/creator/view/CreatorView';

import { ApplicationSidebar } from '../../components/module';
import { ApplicationLayout } from '../../layouts/module';

import { useAppContext } from '../../AppContext';

export type Props = {
    children: React.ReactNode;
};

export default function Template({ children }: Props)
{
    const context = useAppContext();
    const identity = context.identity as CreatorView;

    const sidebar = <ApplicationSidebar identity={identity} />;

    return <ApplicationLayout main={children} aside={sidebar} />;
}
