
import { Route, Routes } from 'react-router-dom';

import accountRoutes from './account';
import { legalRoutes, guestRoutes, appRoutes, ApplicationLayout, GuestLayout, LegalLayout, ProtectedRoute } from './application';
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
                {appRoutes}
                <Route path="/account">{accountRoutes}</Route>
                <Route path="/timeline">{timelineRoutes}</Route>
                <Route path="/explore">{exploreRoutes}</Route>
                <Route path="/notifications">{notificationRoutes}</Route>
                <Route path="/posts">{postRoutes}</Route>
                <Route path="/profile">{profileRoutes}</Route>
            </Route>
            
        </Route>

        <Route element={<GuestLayout />}>
            {guestRoutes}
        </Route>

        <Route element={<LegalLayout />}>
            {legalRoutes}
        </Route>

    </Routes>;
}
