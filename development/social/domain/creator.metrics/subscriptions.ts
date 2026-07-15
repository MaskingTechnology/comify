
import { subscribe as subscribeToCreatorRegistered } from '~/creator/register';
import { subscribe as subscribeToRelationEstablished } from '~/relation/establish';
import { subscribe as subscribeToPostCreated } from '~/post/create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';

import updatePosts from './updatePosts';
import updateFollowing from './updateFollowing';
import create from './create';
import updateFollowerCount from './updateFollowers';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToCreatorRegistered(({ creatorId }) => create(creatorId)),
        subscribeToRelationEstablished(({ followingId }) => updateFollowerCount(followingId, 'increase')),
        subscribeToRelationEstablished(({ followerId }) => updateFollowing(followerId, 'increase')),
        subscribeToPostCreated(({ creatorId, parentId }) =>
        {
            if (parentId !== undefined) return;

            return updatePosts(creatorId, 'increase');
        }),

        subscribeToPostRemoved(({ creatorId, parentId }) =>
        {
            if (parentId !== undefined) return;

            return updatePosts(creatorId, 'decrease');
        })
    ]);
}

subscriptions();
