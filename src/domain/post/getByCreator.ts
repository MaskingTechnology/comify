
import type PostView from './PostView';
import retrieveByCreator from './data/retrieveByCreator';
import createView from './createView';

export default async function getByCreator(creatorId: string): Promise<PostView[]>
{
    const data = await retrieveByCreator(creatorId);

    return Promise.all(data.map(createView));
}
