
import { Outlet } from 'react-router-dom';

import { PortraitLayout  } from '@maskingtech/designsystem';

import LegalHeader from '../components/LegalHeader';
import useNavigateHome from '../hooks/useNavigateHome';

export default function Page()
{
    const navigateHome = useNavigateHome();

    const Header = <LegalHeader onGoBack={navigateHome} />;

    return <PortraitLayout header={Header}>
        <Outlet />
    </PortraitLayout>;
}
