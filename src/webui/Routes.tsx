
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppContext } from './contexts/AppContext';

import Home from './features/Home';
import Login from './features/Login';
import Identify from './features/Identify';
import Timeline from './features/Timeline';
import Explore from './features/Explore';
import Notifications from './features/Notifications';
import CreateComic from './features/CreateComic';
import Profile from './features/Profile';
import NotFound from './features/NotFound';

export default function Component()
{
    const { identity } = useAppContext();

    const protect = (node: React.ReactNode) =>
    {
        return identity === undefined ? <Login /> : node;
    };

    return <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/identify" element={<Identify />} />

        <Route path="/timeline" element={protect(<Timeline />)} />
        <Route path="/explore" element={protect(<Explore />)} />
        <Route path="/notifications" element={protect(<Notifications />)} />
        <Route path="/create" element={protect(<CreateComic />)} />
        <Route path="/profile/:nickname" element={protect(<Profile />)} />

        <Route path="*" element={<NotFound />} />

    </Routes>;
}
