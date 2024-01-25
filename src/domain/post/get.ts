
import type PostView from './PostView';
import retrieve from './data/retrieve';
import createView from './createView';

export default async function get(id: string): Promise<PostView>
{
    const data = await retrieve(id);

    return createView(data);
}
