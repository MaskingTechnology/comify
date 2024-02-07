
import type Requester from '../authentication/Requester';

import type PostView from './view/PostView';
import retrieveByCreators from './data/retrieveByCreators';
import createView from './view/createView';

export default async function getByCreator(creatorId: string, requester?: Requester): Promise<PostView[]>
{
    const data = await retrieveByCreators([creatorId]);

    return Promise.all(data.map(createView));
}
