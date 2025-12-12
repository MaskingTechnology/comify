
import { subscribe as subscribeToPostCreated } from '~/post/create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';

import updatePosts from './updatePosts';

async function subscribe(): Promise<void>
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

export default subscribe();
