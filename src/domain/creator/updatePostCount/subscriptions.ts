
import { subscribe as subscribeToPostAdded } from '^/domain/post/add';
import { subscribe as subscribeToPostRemoved } from '^/domain/post/remove';

import updatePostCount from './updatePostCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostAdded((requesterId) => updatePostCount(requesterId, 'increase')),
        subscribeToPostRemoved((requesterId) => updatePostCount(requesterId, 'decrease'))
    ]);
}

export default subscribe();
