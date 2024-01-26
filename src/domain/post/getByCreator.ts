
import type PostView from './PostView';
import filterDataByCreator from './data/retrieveByCreator';
import createView from './createView';

export default async function getByCreator(creatorId: string): Promise<PostView[]>
{
    const data = await filterDataByCreator(creatorId);

    return Promise.all(data.map(createView));
}
