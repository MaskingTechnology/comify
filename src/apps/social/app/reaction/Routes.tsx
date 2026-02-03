
import { Route, Navigate } from 'react-router-dom';

import Create from './Create';
import CreateComic from './CreateComic';
import CreateComment from './CreateComment';

export default <Route path=''>
    <Route index element={<Navigate to='create' replace />} />
    <Route path='create' element={<Create />}>
        <Route index element={<Navigate to='./comic' replace />} />
        <Route path='comic' element={<CreateComic />} />
        <Route path='comment' element={<CreateComment />} />
    </Route>
</Route>;
