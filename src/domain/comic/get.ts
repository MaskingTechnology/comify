
import type ComicView from './ComicView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(id: string): Promise<ComicView>
{
    const data = await retrieve(id);

    return createView(data);
}
