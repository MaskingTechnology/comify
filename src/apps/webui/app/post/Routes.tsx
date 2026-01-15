
import { Route } from 'react-router-dom';

import reactionRoutes from '~/app/reaction';

import Main from './Main';
import Create from './Create';
import Details from './Details';
import Hightlight from './Highlight';

export default <Route path="" element={<Main />}>
    <Route path="create" element={<Create />} />
    <Route path=":postId" element={<Details />}>
        <Route path="reactions">{reactionRoutes}</Route>
    </Route>
    <Route path=":postId/highlight/:highlightId" element={<Hightlight />} />
</Route>;
