
import type PostView from '../post/PostView';
import createPostView from '../post/createView';
import filterPostData from '../post/filterDataByCreator';

import retrieveRelationsData from '../relation/retrieveDataByFollower';

export default async function posts(): Promise<PostView[]>
{
    const relationsData = await retrieveRelationsData('0');
    const followingIds = relationsData.map(data => data.followingId);
    const postData = await filterPostData(followingIds);

    return Promise.all(postData.map(data => createPostView(data)));
}
