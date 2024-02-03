
import type Requester from '../authentication/Requester';

import retrieveFollowerData from '../relation/data/retrieveByFollower';

import type PostView from './view/PostView';
import retrieveByCreators from './data/retrieveByCreators';
import createView from './view/createView';

export default async function getTimeline(requester: Requester): Promise<PostView[]>
{
    const followerData = await retrieveFollowerData(requester.id, requester);
    const followingIds = followerData.map(data => data.followingId);
    const postData = await retrieveByCreators(followingIds);

    return Promise.all(postData.map(createView));
}
