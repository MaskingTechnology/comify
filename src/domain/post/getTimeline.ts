
import type Requester from '../authentication/Requester';
import retrieveFollowerData from '../relation/data/retrieveByFollower';
import retrieveByCreators from './data/retrieveByCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function getTimeline(requester: Requester): Promise<PostView[]>
{
    const followerData = await retrieveFollowerData(requester?.id);
    const followingIds = followerData.map(data => data.followingId);
    const postData = await retrieveByCreators(followingIds);

    return Promise.all(postData.map(createView));
}
