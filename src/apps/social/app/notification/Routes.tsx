
import { Route } from 'react-router-dom';

import { NotFound } from '~/app/common';

import Main from './Main';

export default <Route path='' element={<Main />}>
    <Route path='*' element={<NotFound />} />
</Route>;
