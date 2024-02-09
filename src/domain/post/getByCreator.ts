
import retrieveByCreators from './data/retrieveByCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function getByCreator(creatorId: string): Promise<PostView[]>
{
    const data = await retrieveByCreators([creatorId]);

    return Promise.all(data.map(createView));
}
