
import type CreatorView from './CreatorView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(id: string): Promise<CreatorView>
{
    const data = await retrieve(id);

    return createView(data);
}
