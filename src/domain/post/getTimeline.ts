
import type Requester from '../authentication/Requester';
import retrieveFollowerData from '../relation/data/retrieveByFollower';
import SortOptions from '../relation/definitions/SortOptions';
import PostData from './data/PostData';
import retrieveByCreators from './data/retrieveByCreators';
import type PostView from './view/PostView';
import createView from './view/createView';

export default async function getTimeline(requester: Requester, sortOption: SortOptions): Promise<PostView[]>
{
    const followerData = await retrieveFollowerData(requester.id);
    const followingIds = followerData.map(data => data.followingId);
    const postData = await retrieveByCreators(followingIds);

    sortOption === SortOptions.RECENT
        ? postData.sort(sortRecent)
        : postData.sort(sortPopular);

    const views = postData.map(item => createView(requester, item));

    return Promise.all(views);
}

function sortRecent(a: PostData, b: PostData)
{
    if (a.createdAt > b.createdAt) return 1;
    if (a.createdAt < b.createdAt) return -1;

    return 0;
}

function sortPopular(a: PostData, b: PostData)
{
    const popularityA = a.reactionCount * 2 + a.ratingCount;
    const popularityB = b.reactionCount * 2 + b.ratingCount;

    if (popularityA > popularityB) return -1;
    if (popularityA < popularityB) return 1;

    return 0;
}