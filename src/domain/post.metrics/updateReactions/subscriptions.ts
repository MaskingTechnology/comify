
import { subscribe as subscribeToPostCreated } from '~/post/create';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';

import updateReactions from './updateReactions';

async function subscribe(): Promise<void>
{
    await Promise.all([

        subscribeToPostCreated(({ parentId }) =>
        {
            if (parentId === undefined) return;

            return updateReactions(parentId, 'increase');
        }),

        subscribeToPostRemoved(({ parentId }) =>
        {
            if (parentId === undefined) return;

            return updateReactions(parentId, 'decrease');
        })

    ]);
}

export default subscribe();
