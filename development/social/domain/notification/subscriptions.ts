
import { subscribe as subscribeToPostCreated } from '~/post/_create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';
import { subscribe as subscribeToPostRated } from '~/post.rating/toggle';
import { subscribe as subscribeToRelationEstablished } from '~/relation/establish';

import reactedToPost from './notifyReactionAdded';
import ratedPost from './notifyPostRated';
import removedPost from './removeByPost';
import startedFollowing from './notifyStartedFollowing';

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
