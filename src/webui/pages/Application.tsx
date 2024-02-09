
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../../domain/authentication/logout';
import { ApplicationSidebar } from '../components/module';
import { useAppContext } from '../contexts/AppContext';
import { SidebarLayout } from '../layouts/module';

export type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    const navigate = useNavigate();
    const { identity, setIdentity } = useAppContext();

    if (identity === undefined)
    {
        return null;
    }

    const handleLogout = async () =>
    {
        await logout();

        setIdentity(undefined);

        navigate('/');
    };

    const sidebar = <ApplicationSidebar identity={identity} logoutHandler={handleLogout} />;

    return <SidebarLayout sidebar={sidebar}>
        {children}
    </SidebarLayout>;
}
