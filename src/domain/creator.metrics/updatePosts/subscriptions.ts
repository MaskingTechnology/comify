
import { subscribe as subscribeToPostAdded } from '^/domain/post/create';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';

import updatePosts from './updatePosts';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostAdded(({ creatorId }) => updatePosts(creatorId, 'increase')),
        subscribeToPostRemoved(({ creatorId }) => updatePosts(creatorId, 'decrease'))
    ]);
}

export default subscribe();
