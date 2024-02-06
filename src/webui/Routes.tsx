
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import GetIn from './pages/GetIn';
import Login from './pages/Login';
import TimelinePage from './pages/Timeline';
import ExplorePage from './pages/Explore';
import NotificationsPage from './pages/Notifications';
import CreatePage from './pages/Create';
import ProfilePage from './pages/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/getin',
        element: <GetIn />
    },
    {
        path: '/login',
        element: <Login />
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

export default function Routes()
{
    return <RouterProvider router={router} />;
}
