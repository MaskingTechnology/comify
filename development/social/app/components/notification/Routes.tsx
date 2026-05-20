
import { Route } from 'react-router-dom';

import { NotFound } from '~/components/common';

import Main from './Main';

export default <Route path='' element={<Main />}>
    <Route path='*' element={<NotFound />} />
</Route>;
