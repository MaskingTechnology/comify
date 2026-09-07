
import { ErrorBoundary } from '@maskingtech/react-toolkit';
import { BrowserRouter } from 'react-router-dom';

import { AppContextProvider, ErrorHandler } from './application';
import Routes from './Routes';

export default function ()
{
    return <AppContextProvider>
        <BrowserRouter>
            <ErrorBoundary element={ErrorHandler}>
                <Routes />
            </ErrorBoundary>
        </BrowserRouter>
    </AppContextProvider>;
}
