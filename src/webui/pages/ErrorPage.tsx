
import React from 'react';

import Icon from '../designsystem/elements/icon/Icon.js';

import { Navigation, NavigationItem } from '../components/module';

export default function ErrorPage()
{
    return <Navigation>
        <NavigationItem icon={<Icon type='diamond'></Icon>} text='home' to='/' />
    </Navigation>;
}
