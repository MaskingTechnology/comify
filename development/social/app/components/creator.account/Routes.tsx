
import { Route } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Edit from './Edit';
import Main from './Main';

export default <Route path='' element={<Main />}>
    <Route path='edit' element={<Edit />} />
    <Route path='*' element={<NotFound />} />
</Route>;
