
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './features/Home';
import GetIn from './features/GetIn';
import Login from './features/Login';
import Timeline from './features/Timeline';
import Explore from './features/Explore';
import Notifications from './features/Notifications';
import CreateComic from './features/CreateComic';
import Profile from './features/Profile';
import NotFound from './features/NotFound';

export default function Component()
{
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getin" element={<GetIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<CreateComic />} />
        <Route path="/profile/:nickname" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
    </Routes>;
}
