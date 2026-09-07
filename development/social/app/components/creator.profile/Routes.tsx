
import { Route, Navigate } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Comics from './Comics';
import Followers from './Followers';
import Following from './Following';
import Main from './Main';

export default <Route path=':nickname' element={<Main />}>
    <Route index element={<Navigate to='./comics' replace />} />
    <Route path='comics' element={<Comics />} />
    <Route path='followers' element={<Followers />} />
    <Route path='following' element={<Following />} />
    <Route path='*' element={<NotFound />} />
</Route>;
