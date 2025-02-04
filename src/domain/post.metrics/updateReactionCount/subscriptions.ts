
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';

import updateReactionCount from './updateReactionCount';

async function subscribe(): Promise<void>
{
    await subscribeToPostCreated(({ parentId }) =>
    {
        if (parentId === undefined) return;

        return updateReactionCount(parentId, 'increase');
    });

    await subscribeToPostRemoved(({ parentId }) =>
    {
        if (parentId === undefined) return;

        return updateReactionCount(parentId, 'decrease');
    });
}

export default subscribe();
