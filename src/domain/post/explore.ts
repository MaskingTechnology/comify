
import type Requester from '../authentication/Requester';
import retrieveRelationsByFollower from '../relation/repository/retrieveByFollower';
import retrieveWithoutCreators from './repository/retrieveWithoutCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function explore(requester: Requester): Promise<PostView[]>
{
    const relationsData = await retrieveRelationsByFollower(requester.id);
    const excludedIds = relationsData.map(data => data.followingId);
    excludedIds.push(requester.id);

    const postData = await retrieveWithoutCreators(excludedIds);
    const views = postData.map(item => createView(requester, item));

    return Promise.all(views);
}
