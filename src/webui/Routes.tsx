
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppContext } from './contexts/module';
import CreateComic from './features/CreateComic';
import Explore from './features/Explore';
import Home from './features/Home';
import Identify from './features/Identify';
import Login from './features/Login';
import Logout from './features/Logout';
import NotFound from './features/NotFound';
import Notifications from './features/Notifications';
import Post from './features/Post';
import Profile from './features/Profile';
import Timeline from './features/Timeline';

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
        <Route path="/post/:postId" element={protect(<Post />)} />
        <Route path="/logout" element={protect(<Logout />)} />

        <Route path="*" element={<NotFound />} />

    </Routes>;
}
