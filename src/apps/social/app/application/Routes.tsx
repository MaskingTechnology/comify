
import { Route } from 'react-router-dom';

import { NotFound } from '~/app/common';

import Home from './Home';
import Login from './Login';
import Identify from './Identify';
import Logout from './Logout';
import Terms from './Terms';
import Privacy from './Privacy';

export const legalRoutes = <Route>
    <Route path='/terms' element={<Terms />} />
    <Route path='/privacy' element={<Privacy />} />
    <Route path='*' element={<NotFound />} />
</Route>;

export const guestRoutes = <Route>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/identify' element={<Identify />} />
</Route>;

export const appRoutes = <Route>
    <Route path='/logout' element={<Logout />} />
</Route>;
