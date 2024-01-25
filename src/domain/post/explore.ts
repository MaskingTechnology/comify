
import retrieveRelationsByFollower from '../relation/data/retrieveByFollower';

import type PostView from './PostView';
import createView from './createView';

import retrieveWithoutCreator from './data/retrieveWithoutCreator';

export default async function explore(): Promise<PostView[]>
{
    const relationsData = await retrieveRelationsByFollower('0');
    const followingIds = relationsData.map(data => data.followingId);
    const postData = await retrieveWithoutCreator(...followingIds);

    return Promise.all(postData.map(data => createView(data)));
}
