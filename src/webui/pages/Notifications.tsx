
import React from 'react';

import Notifications from '../features/Notifications';
import ApplicationTemplate from './templates/Application';

export default function Page()
{
    return <ApplicationTemplate>
        <Notifications />
    </ApplicationTemplate>;
}
