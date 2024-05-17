
import type Requester from '^/domain/authentication/Requester';
import retrieveFollowerData from '^/domain/relation/repository/retrieveByFollower';

import retrieveByCreators from './repository/retrieveByCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function getTimeline(requester: Requester): Promise<PostView[]>
{
    const followerData = await retrieveFollowerData(requester.id);
    const followingIds = followerData.map(data => data.followingId);
    const postData = await retrieveByCreators(followingIds);

    const views = postData.map(item => createView(requester, item));

    return Promise.all(views);
}
