
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { ApplicationFooter, ApplicationHeader, ApplicationSidebar } from '^/webui/components';
import { useAppContext } from '^/webui/contexts/AppContext';
import { SidebarLayout } from '^/webui/layouts';

type Props = {
    readonly children?: ReactNode;
};

export default function Page({ children }: Props)
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    if (identity === undefined)
    {
        return null;
    }

    const onLogout = () => navigate('/logout');

    const header = <ApplicationHeader identity={identity} onLogout={onLogout} />;
    const footer = <ApplicationFooter identity={identity} />;
    const sidebar = <ApplicationSidebar identity={identity} onLogout={onLogout} />;

    return <SidebarLayout header={header} footer={footer} sidebar={sidebar}>
        {children}
    </SidebarLayout>;
}
