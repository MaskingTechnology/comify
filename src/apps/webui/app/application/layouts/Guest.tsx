
import { Outlet } from 'react-router-dom';

import { CenteredLayout  } from '@maskingtech/designsystem';

export default function Page()
{
    return <CenteredLayout>
        <Outlet />
    </CenteredLayout>;
}
