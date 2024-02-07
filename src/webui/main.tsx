
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppContext from './AppContext';
import App from './App';

import './designsystem/designsystem.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
