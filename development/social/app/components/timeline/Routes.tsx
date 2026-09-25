
import { Route, Navigate } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Following from './Following';
import ForYou from './ForYou';
import Main from './Main';

export default <Route path='' element={<Main />}>
    <Route index element={<Navigate to='./foryou' replace />} />
    <Route path='foryou' element={<ForYou />} />
    <Route path='following' element={<Following />} />
    <Route path='*' element={<NotFound />} />
</Route>;
