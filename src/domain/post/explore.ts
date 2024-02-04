
import type Requester from '../authentication/Requester';

import retrieveRelationsByFollower from '../relation/data/retrieveByFollower';

import type PostView from './view/PostView';
import createView from './view/createView';

import retrieveWithoutCreators from './data/retrieveWithoutCreators';

export default async function explore(requester?: Requester): Promise<PostView[]>
{
    const relationsData = await retrieveRelationsByFollower(requester?.id ?? '0');
    const followingIds = relationsData.map(data => data.followingId);
    const postData = await retrieveWithoutCreators(followingIds);

    return Promise.all(postData.map(createView));
}
