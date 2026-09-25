
import { CenteredLayout } from '@maskingtech/designsystem';
import { Outlet } from 'react-router-dom';

export default function ()
{
    return <CenteredLayout>
        <Outlet />
    </CenteredLayout>;
}
