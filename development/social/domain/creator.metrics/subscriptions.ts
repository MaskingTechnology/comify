
import { subscribe as onCreatorAdded } from '@comify/common/domain/creator/added';
import { subscribe as onPostAdded } from '@comify/common/domain/post/added';
import { subscribe as onPostRemoved } from '@comify/common/domain/post/removed';
import { subscribe as onRelationEstablished } from '@comify/common/domain/relation/established';

import createMetrics from './create';
import updateFollowerCount from './updateFollowers';
import updateFollowingCount from './updateFollowing';
import updatePostCount from './updatePosts';

export default async function subscribe(): Promise<void>
{
    await Promise.all([
        onCreatorAdded(({ creatorId }) => createMetrics(creatorId)),
        onRelationEstablished(({ followingId }) => updateFollowerCount(followingId, 'increase')),
        onRelationEstablished(({ followerId }) => updateFollowingCount(followerId, 'increase')),
        onPostAdded(({ tenantId, principalId, parentId }) => updatePostCount(tenantId, principalId, parentId, 'increase')),
        onPostRemoved(({ tenantId, principalId, parentId }) => updatePostCount(tenantId, principalId, parentId, 'decrease'))
    ]);
}

subscribe();
