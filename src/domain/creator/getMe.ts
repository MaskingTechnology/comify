
import type Requester from '../authentication/Requester';
import retrieve from './data/retrieve';
import type CreatorView from './view/CreatorView';
import createView from './view/createView';

export default async function getMe(requester: Requester): Promise<CreatorView>
{
    const data = await retrieve(requester.id);

    return createView(data);
}
