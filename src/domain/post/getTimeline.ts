
import retrieveFollowerData from '../relation/data/retrieveByFollower';

import type PostView from './PostView';
import filterDataByCreator from './data/retrieveByCreator';
import createView from './createView';

export default async function getTimeline(): Promise<PostView[]>
{
    const followerData = await retrieveFollowerData('0');
    const followingIds = followerData.map(data => data.followingId);
    const postData = await filterDataByCreator(...followingIds);

    return Promise.all(postData.map((data) => createView(data)));
}
