
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import TimelinePage from './pages/Timeline';
import ExplorePage from './pages/Explore';
import NotificationsPage from './pages/Notifications';
import CreatePage from './pages/Create';
import ProfilePage from './pages/Profile';

import './designsystem/designsystem.css';
import './main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/timeline',
    element: <TimelinePage />
  },
  {
    path: '/explore',
    element: <ExplorePage />
  },
  {
    path: '/notifications',
    element: <NotificationsPage />
  },
  {
    path: '/create',
    element: <CreatePage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
