
import { subscribe as subscribeToCreatorRegistered } from '~/creator/_register';
import { subscribe as subscribeToRelationEstablished } from '~/relation/establish';
import { subscribe as subscribeToPostCreated } from '~/post/create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';

import updatePosts from './_updatePosts';
import updateFollowing from './_updateFollowing';
import create from './_create';
import updateFollowerCount from './_updateFollowers';

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

// TODO: all the features are private, as they all work with data. It's also not possible to do anything directly, as these only execute on subscriptions