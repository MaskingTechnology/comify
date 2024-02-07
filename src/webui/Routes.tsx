
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Introduction from './features/Introduction';
import GetIn from './features/GetIn';
import Login from './features/Login';
import Timeline from './features/Timeline';
import Explore from './features/Explore';
import Notifications from './features/Notifications';
import CreateComic from './features/CreateComic';
import Profile from './features/Profile';

export default function Component()
{
    return <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/getin" element={<GetIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/create" element={<CreateComic />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>;
}
