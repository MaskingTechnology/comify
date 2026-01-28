
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@maskingtech/react-toolkit';

import { AppContextProvider, ErrorHandler } from './application';

import Routes from './Routes';

export default function App()
{
    return <AppContextProvider>
        <BrowserRouter>
            <ErrorBoundary element={ErrorHandler}>
                <Routes />
            </ErrorBoundary>
        </BrowserRouter>
    </AppContextProvider>;
}
