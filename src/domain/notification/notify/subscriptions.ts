
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';
import { subscribe as subscribeToPostRated } from '^/domain/rating/toggle';
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import reactedToPost from './createdPost';
import ratedPost from './ratedPost';
import startedFollowing from './startedFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated(({ creatorId, postId, rated }) => ratedPost(creatorId, postId, rated)),
        subscribeToPostCreated(({ creatorId, postId, parentId }) => reactedToPost(creatorId, postId, parentId)),
        subscribeToRelationEstablished(({ followerId, followingId }) => startedFollowing(followerId, followingId)),
    ]);
}

export default subscribe();
