
import { PortraitLayout } from '@maskingtech/designsystem';
import { Outlet } from 'react-router-dom';

import LegalHeader from '../components/LegalHeader';
import useNavigateHome from '../hooks/useNavigateHome';

export default function ()
{
    const navigateHome = useNavigateHome();

    const Header = <LegalHeader onGoHome={navigateHome} />;

    return <PortraitLayout header={Header}>
        <Outlet />
    </PortraitLayout>;
}
