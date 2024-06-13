
import { BrowserRouter } from 'react-router-dom';

import { ApplicationModal } from './components';

import Routes from './Routes';
import { ErrorBoundary } from './components';
import { useAppContext } from './contexts';
import ErrorHandler from './features/ErrorHandler';
import { Application, Guest } from './pages';

export default function App()
{
    const { identity, modalContent, modalOpen } = useAppContext();

    const Page = identity === undefined ? Guest : Application;

    return <BrowserRouter>
        <Page>
            <ErrorBoundary element={ErrorHandler}>
                <ApplicationModal open={modalOpen}>
                    {modalContent}
                </ApplicationModal>
                <Routes />
            </ErrorBoundary>
        </Page>
    </BrowserRouter>;
}
