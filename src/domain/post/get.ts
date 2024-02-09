
import retrieve from './data/retrieve';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function get(id: string): Promise<PostView>
{
    const data = await retrieve(id);

    return createView(data);
}
