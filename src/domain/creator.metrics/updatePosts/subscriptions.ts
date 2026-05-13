
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';

import updatePosts from './updatePosts';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([

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
