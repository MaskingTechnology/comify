
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { ErrorBoundary } from './components/module';
import { useAppContext } from './contexts/AppContext';
import ErrorHandler from './features/ErrorHandler';
import Application from './pages/Application';
import Guest from './pages/Guest';

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
