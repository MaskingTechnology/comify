
import { Route } from 'react-router-dom';

import reactionRoutes from '~/app/reaction';

import Main from './Main';
import Create from './Create';
import Details from './Details';
import Highlight from './Highlight';
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
