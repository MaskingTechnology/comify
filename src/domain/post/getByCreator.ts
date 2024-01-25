
import type PostView from './PostView';
import filterDataByCreator from './data/retrieveByCreator';
import createView from './createView';

export default async function getByCreator(creatorId: string): Promise<PostView[]>
{
    const postData = await filterDataByCreator(creatorId);

    return Promise.all(postData.map((data) => createView(data)));
}
