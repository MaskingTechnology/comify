
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from './components/module';
import ErrorHandler from './features/ErrorHandler';

import Guest from './pages/Guest';
import Application from './pages/Application';

import { useAppContext } from './contexts/AppContext';
import Routes from './Routes';

export default function App()
{
    const { identity } = useAppContext();

    const Page = identity ? Application : Guest;

    return <BrowserRouter>
        <Page>
            <ErrorBoundary element={ErrorHandler}>
                <Routes />
            </ErrorBoundary>
        </Page>
    </BrowserRouter>;
}
