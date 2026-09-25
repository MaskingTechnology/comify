
import { Route } from 'react-router-dom';

import reactionRoutes from '~/components/post.reaction';

import Create from './Create';
import Details from './Details';
import Highlight from './Highlight';
import Main from './Main';
import Remove from './Remove';

export default <Route path='' element={<Main />}>
    <Route path='create' element={<Create />} />
    <Route path=':postId' element={<Details />}>
        <Route path='reactions'>{reactionRoutes}</Route>
        <Route path='remove' element={<Remove />}></Route>
    </Route>
    <Route path=':postId/highlight/:highlightId' element={<Highlight />}>
        <Route path='remove' element={<Remove />}></Route>
    </Route>
</Route>;
