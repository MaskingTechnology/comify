
import type ImageView from './ImageView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(id: string): Promise<ImageView>
{
    const data = await retrieve(id);

    return createView(data);
}
