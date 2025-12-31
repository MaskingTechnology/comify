
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';
import { subscribe as subscribeToPostRated } from '^/domain/rating/toggle';
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import reactedToPost from './createdPost';
import ratedPost from './ratedPost';
import removedPost from './removedPost';
import startedFollowing from './startedFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated(({ tenantId, creatorId, postId, rated }) => ratedPost(tenantId, creatorId, postId, rated)),
        subscribeToPostCreated(({ tenantId, creatorId, postId, parentId }) => reactedToPost(tenantId, creatorId, postId, parentId)),
        subscribeToRelationEstablished(({ followerId, followingId }) => startedFollowing(followerId, followingId)),
        subscribeToPostRemoved(({ postId }) => removedPost(postId)),
    ]);
}

export default subscribe();
