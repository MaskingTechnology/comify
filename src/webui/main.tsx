
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AppContextProvider } from './contexts';

import './designsystem/designsystem.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
