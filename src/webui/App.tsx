
import React from 'react';

import AppContext from './AppContext';
import Routes from './Routes';

export default function App()
{
    return <AppContext>
        <Routes />
    </AppContext>;
}
