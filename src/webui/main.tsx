
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AppContextProvider } from './contexts/module';

import './designsystem/designsystem.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
