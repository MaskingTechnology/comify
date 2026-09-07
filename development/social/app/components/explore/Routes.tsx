
import { Route, Navigate } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Creators from './Creators';
import Main from './Main';
import Posts from './Posts';


export default <Route path='' element={<Main />}>
    <Route index element={<Navigate to='./comics' replace />} />
    <Route path='comics' element={<Posts />} />
    <Route path='creators' element={<Creators />} />
    <Route path='*' element={<NotFound />} />
</Route>;
