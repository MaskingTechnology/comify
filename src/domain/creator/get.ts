
import retrieve from './data/retrieve';
import type CreatorView from './view/CreatorView';
import createView from './view/createView';

export default async function get(id: string): Promise<CreatorView>
{
    const data = await retrieve(id);

    return createView(data);
}
