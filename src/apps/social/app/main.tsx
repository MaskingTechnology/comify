
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { DesignSystem } from '@maskingtech/designsystem';

import { TenantContainer } from './common';
import App from './App';

import '@maskingtech/designsystem/style.css';
import './theme.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <DesignSystem>
      <TenantContainer>
        <App />
      </TenantContainer>
    </DesignSystem>
  </StrictMode>
);
