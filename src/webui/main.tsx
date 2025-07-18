
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TenantContainer } from './components';
import { AppContextProvider } from './contexts';

import './designsystem/designsystem.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TenantContainer>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </TenantContainer>
  </StrictMode>
);
