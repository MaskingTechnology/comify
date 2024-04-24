
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import { ErrorBoundary } from './components/module';
import { useAppContext } from './contexts/module';
import ErrorHandler from './features/ErrorHandler';
import { Application, Guest } from './pages/module';

export default function App()
{
    const { identity } = useAppContext();

    const Page = identity === undefined ? Guest : Application;

    return <BrowserRouter>
        <Page>
            <ErrorBoundary element={ErrorHandler}>
                <Routes />
            </ErrorBoundary>
        </Page>
    </BrowserRouter>;
}
