
import type Requester from '../authentication/Requester';
import retrieveByCreators from './data/retrieveByCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function getByCreator(requester: Requester, creatorId: string): Promise<PostView[]>
{
    const data = await retrieveByCreators([creatorId]);

    const views = data.map(item => createView(requester, item));

    return Promise.all(views);
}
