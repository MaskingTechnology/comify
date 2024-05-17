
import type Requester from '../authentication/Requester';
import retrieve from './repository/retrieve';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function get(requester: Requester, id: string): Promise<PostView>
{
    const data = await retrieve(id);

    return createView(requester, data);
}
