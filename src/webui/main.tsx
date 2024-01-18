
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthenticatedPage from './pages/AuthenticatedPage';
//import App from './App';

import './designsystem/designsystem.css';
import './index.css';
import HomePage from './pages/HomePage.js';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/authenticated',
      element: <AuthenticatedPage />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
