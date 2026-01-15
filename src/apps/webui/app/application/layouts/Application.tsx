
import { useNavigate, Outlet } from 'react-router-dom';

import { SidebarLayout } from '@maskingtech/designsystem';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import { useAppContext } from '../contexts/AppContext';

export default function Page()
{
    const navigate = useNavigate();
    const onLogout = () => navigate('/logout');
    const { identity } = useAppContext();

    const header = <Header identity={identity!} onLogout={onLogout} />;
    const footer = <Footer identity={identity!} />;
    const sidebar = <Sidebar identity={identity!} onLogout={onLogout} />;

    return <SidebarLayout header={header} footer={footer} sidebar={sidebar}>
        <Outlet />
    </SidebarLayout>;
}
