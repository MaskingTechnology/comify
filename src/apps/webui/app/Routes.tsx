
import { Route, Routes, Navigate } from 'react-router-dom';

import accountRoutes from './account';
import { publicRoutes, protectedRoutes, ApplicationLayout, GuestLayout, ProtectedRoute } from './application';
import timelineRoutes from './timeline';
import exploreRoutes from './explore';
import notificationRoutes from './notification';
import postRoutes from './post';
import profileRoutes from './profile';

export default function Component()
{
    return <Routes>

        <Route element={<ProtectedRoute />}>

            <Route element={<ApplicationLayout />}>
                {protectedRoutes}
                <Route index element={<Navigate to="/timeline" replace />} />
                <Route path="/account">{accountRoutes}</Route>
                <Route path="/timeline">{timelineRoutes}</Route>
                <Route path="/explore">{exploreRoutes}</Route>
                <Route path="/notifications">{notificationRoutes}</Route>
                <Route path="/posts">{postRoutes}</Route>
                <Route path="/profile">{profileRoutes}</Route>
            </Route>
            
        </Route>

        <Route element={<GuestLayout />}>
            {publicRoutes}
        </Route>

    </Routes>;
}
