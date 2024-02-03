
import type Requester from '../authentication/Requester';

import type ImageView from './view/ImageView';
import createView from './view/createView';
import retrieve from './data/retrieve';

export default async function get(id: string, requester: Requester): Promise<ImageView>
{
    const data = await retrieve(id);

    return createView(data);
}
