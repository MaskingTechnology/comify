
import type Requester from '../authentication/Requester';

import type CreatorView from './view/CreatorView';
import createView from './view/createView';
import retrieve from './data/retrieve';

export default async function get(id: string, requester?: Requester): Promise<CreatorView>
{
    const data = await retrieve(id);

    return createView(data);
}
