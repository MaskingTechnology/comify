
import React from 'react';

import Notifications from '../features/Notifications';
import Application from './templates/Application';

export default function Page()
{
    return <Application>
        <Notifications />
    </Application>;
}
