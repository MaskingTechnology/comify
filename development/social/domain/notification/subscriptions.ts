
import { subscribe as subscribeToPostCreated } from '~/post/create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';
import { subscribe as subscribeToPostRated } from '~/rating/toggle';
import { subscribe as subscribeToRelationEstablished } from '~/relation/establish';

import reactedToPost from './notify/createdPost';
import ratedPost from './notify/ratedPost';
import removedPost from './notify/removedPost';
import startedFollowing from './notify/startedFollowing';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated(({ tenantId, creatorId, postId, rated }) => ratedPost(tenantId, creatorId, postId, rated)),
        subscribeToPostCreated(({ tenantId, creatorId, postId, parentId }) => reactedToPost(tenantId, creatorId, postId, parentId)),
        subscribeToRelationEstablished(({ followerId, followingId }) => startedFollowing(followerId, followingId)),
        subscribeToPostRemoved(({ postId }) => removedPost(postId)),
    ]);
}

subscriptions();
