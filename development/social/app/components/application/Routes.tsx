
import { Route } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Home from './Home';
import Identify from './Identify';
import Login from './Login';
import Logout from './Logout';
import Privacy from './Privacy';
import Terms from './Terms';

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
