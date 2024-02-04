
import Requester from '../authentication/Requester';

import type CreatorView from './view/CreatorView';
import createView from './view/createView';
import retrieve from './data/retrieve';

export default async function getMe(requester?: Requester): Promise<CreatorView>
{
    const data = await retrieve(requester?.id ?? '0');

    return createView(data);
}