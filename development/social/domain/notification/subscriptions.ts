
import { subscribe as onPostAdded } from '@comify/common/domain/post/added';
import { subscribe as onPostRemoved } from '@comify/common/domain/post/removed';
import { subscribe as onPostRated } from '@comify/common/domain/post.rating/added';
import { subscribe as onRelationEstablished } from '@comify/common/domain/relation/established';

import notifyReactionAdded from './notifyReactionAdded';
import notifyPostRated from './notifyPostRated';
import notifyStartedFollowing from './notifyStartedFollowing';
import removePostRelatedNotifications from './removeByPost';

export default async function subscribe(): Promise<void>
{
    await Promise.all([
        onPostAdded(({ tenantId, postId }) => notifyReactionAdded(tenantId, postId)),
        onPostRated(({ tenantId, creatorId, postId }) => notifyPostRated(tenantId, creatorId, postId)),
        onRelationEstablished(({ followerId, followingId }) => notifyStartedFollowing(followerId, followingId)),
        onPostRemoved(({ postId }) => removePostRelatedNotifications(postId))
    ]);
}

subscribe();
