
import type Requester from '../authentication/Requester';

import type PostView from './view/PostView';
import retrieve from './data/retrieve';
import createView from './view/createView';

export default async function get(id: string, requester?: Requester): Promise<PostView>
{
    const data = await retrieve(id);

    return createView(data);
}
