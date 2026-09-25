
import { DesignSystem } from '@maskingtech/designsystem';
import '@maskingtech/designsystem/style.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { TenantContainer } from './common';

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
