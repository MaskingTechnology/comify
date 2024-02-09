
import type Requester from '../authentication/Requester';
import retrieveByNickname from './data/retrieveByNickname';
import CreatorNotFound from './errors/CreatorNotFound';
import type CreatorView from './view/CreatorView';
import createView from './view/createView';

export default async function get(nickname: string, requester?: Requester): Promise<CreatorView>
{
    const data = await retrieveByNickname(nickname);

    if (data === undefined)
    {
        throw new CreatorNotFound(nickname);
    }

    return createView(data);
}
