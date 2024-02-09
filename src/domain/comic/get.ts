
import retrieve from './data/retrieve';
import type ComicView from './view/ComicView';
import createView from './view/createView';

export default async function get(id: string): Promise<ComicView>
{
    const data = await retrieve(id);

    return createView(data);
}
