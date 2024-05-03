
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ApplicationSidebar } from '^/webui/components';
import { useAppContext } from '^/webui/contexts/AppContext';
import { SidebarLayout } from '^/webui/layouts';

type Props = {
    readonly children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    if (identity === undefined)
    {
        return null;
    }

    const sidebar = <ApplicationSidebar identity={identity} onLogout={() => navigate('/logout')} />;

    return <SidebarLayout sidebar={sidebar}>
        {children}
    </SidebarLayout>;
}
