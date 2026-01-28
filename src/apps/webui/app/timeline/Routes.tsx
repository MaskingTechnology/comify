
import { Route, Navigate } from 'react-router-dom';

import { NotFound } from '~/app/common';

import Main from './Main';
import ForYou from './ForYou';
import Following from './Following';

export default <Route path="" element={<Main />}>
    <Route index element={<Navigate to="foryou" replace />} />
    <Route path="foryou" element={<ForYou />} />
    <Route path="following" element={<Following />} />
    <Route path="*" element={<NotFound />} />
</Route>;
