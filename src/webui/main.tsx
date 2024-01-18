
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import ApplicationPage from './pages/ApplicationPage.js';

import './designsystem/designsystem.css';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/application',
    element: <ApplicationPage />
  },
  {
    path: '/explore',
    element: <ApplicationPage />
  },
  {
    path: '/notifications',
    element: <ApplicationPage />
  },
  {
    path: '/create',
    element: <ApplicationPage />
  },
  {
    path: '/profile',
    element: <ApplicationPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
