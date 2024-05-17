
import CreatorNotFound from './errors/CreatorNotFound';
import retrieveByNickname from './repository/retrieveByNickname';
import type CreatorView from './view/CreatorView';
import createView from './view/createView';

export default async function get(nickname: string): Promise<CreatorView>
{
    const data = await retrieveByNickname(nickname);

    if (data === undefined)
    {
        throw new CreatorNotFound(nickname);
    }

    return createView(data);
}
