
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/module';
import ErrorHandler from './features/ErrorHandler';

import Guest from './pages/Guest';
import Application from './pages/Application';

import { useAppContext } from './AppContext';
import Routes from './Routes';

export default function App()
{
    const context = useAppContext();
    const Page = context.identity ? Application : Guest;

    return <BrowserRouter>
        <Page>
            <ErrorBoundary element={ErrorHandler}>
                <Routes />
            </ErrorBoundary>
        </Page>
    </BrowserRouter>;
}
