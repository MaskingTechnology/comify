
import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAppContext } from './contexts';
import CreateComicPost from './features/CreateComicPost';
import EditProfile from './features/EditProfile';
import Explore from './features/Explore';
import Home from './features/Home';
import Identify from './features/Identify';
import Login from './features/Login';
import Logout from './features/Logout';
import NotFound from './features/NotFound';
import Notifications from './features/Notifications';
import PostDetails from './features/PostDetails';
import Profile from './features/Profile';
import Timeline from './features/Timeline';

export default function Component()
{
    const { identity } = useAppContext();

    const protect = (node: ReactNode) =>
    {
        return identity === undefined ? <Login /> : node;
    };

    return <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/identify" element={<Identify />} />

        <Route path="/timeline" element={protect(<Timeline />)} />
        <Route path="/explore/:tab?" element={protect(<Explore />)} />
        <Route path="/notifications" element={protect(<Notifications />)} />
        <Route path="/create" element={protect(<CreateComicPost />)} />
        <Route path="/profile/:nickname/:tab?" element={protect(<Profile />)} />
        <Route path="/edit/profile" element={protect(<EditProfile />)} />
        <Route path="/post/:postId" element={protect(<PostDetails />)} />
        <Route path="/logout" element={protect(<Logout />)} />

        <Route path="*" element={<NotFound />} />

    </Routes>;
}
