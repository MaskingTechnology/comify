
import { subscribe as subscribeToPostAdded } from '^/domain/post/create';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';

import updatePostCount from './updatePostCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostAdded(({ creatorId }) => updatePostCount(creatorId, 'increase')),
        subscribeToPostRemoved(({ creatorId }) => updatePostCount(creatorId, 'decrease'))
    ]);
}

export default subscribe();
