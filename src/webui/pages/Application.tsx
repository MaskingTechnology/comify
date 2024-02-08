
import React from 'react';

import { ApplicationSidebar } from '../components/module';
import { SidebarLayout } from '../layouts/module';

import { useAppContext } from '../contexts/AppContext';

export type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    const { identity } = useAppContext();

    if (identity === undefined)
    {
        return null;
    }

    const sidebar = <ApplicationSidebar identity={identity} />;

    return <SidebarLayout sidebar={sidebar}>
        {children}
    </SidebarLayout>;
}
