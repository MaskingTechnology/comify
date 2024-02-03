
import Requester from '../authentication/Requester';

import type CreatorView from './CreatorView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function getMe(requester: Requester): Promise<CreatorView>
{
    const data = await retrieve(requester.id, requester);

    return createView(data);
}