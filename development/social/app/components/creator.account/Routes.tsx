
import { Route } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Main from './Main';
import Edit from './Edit';

export default <Route path='' element={<Main />}>
    <Route path='edit' element={<Edit />} />
    <Route path='*' element={<NotFound />} />
</Route>;
