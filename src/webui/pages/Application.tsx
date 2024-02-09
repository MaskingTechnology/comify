
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ApplicationSidebar } from '../components/module';
import { useAppContext } from '../contexts/AppContext';
import { SidebarLayout } from '../layouts/module';

export type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    if (identity === undefined)
    {
        return null;
    }

    const sidebar = <ApplicationSidebar identity={identity} logoutHandler={() => navigate('/logout')} />;

    return <SidebarLayout sidebar={sidebar}>
        {children}
    </SidebarLayout>;
}
