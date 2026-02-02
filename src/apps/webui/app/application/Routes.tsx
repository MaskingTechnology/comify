
import { Route } from 'react-router-dom';

import { NotFound } from '~/app/common';

import Home from './Home';
import Login from './Login';
import Identify from './Identify';
import Logout from './Logout';

export const publicRoutes = <Route>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/identify' element={<Identify />} />
    <Route path='*' element={<NotFound />} />
</Route>;

export const protectedRoutes = <Route>
    <Route path='/logout' element={<Logout />} />
</Route>;
