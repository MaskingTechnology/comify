
import React from 'react';

import type CreatorView from '../../domain/creator/view/CreatorView';

import { ApplicationSidebar } from '../components/module';
import { SidebarLayout } from '../layouts/module';

import { useAppContext } from '../AppContext';
import Routes from '../Routes';

export default function Page()
{
    const context = useAppContext();
    const identity = context.identity as CreatorView;

    const sidebar = <ApplicationSidebar identity={identity} />;

    return <SidebarLayout sidebar={sidebar}>
        <Routes />
    </SidebarLayout>;
}
