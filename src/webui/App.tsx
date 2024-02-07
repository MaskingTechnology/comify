
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Guest from './pages/Guest';
import Application from './pages/Application';

import { useAppContext } from './AppContext';

export default function App()
{
    const context = useAppContext();
    const page = context.identity ? <Application /> : <Guest />;

    return <BrowserRouter>
        {page}
    </BrowserRouter>;
}
