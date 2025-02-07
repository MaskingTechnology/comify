
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';

import create from './create';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostCreated(({ postId }) => create(postId)),
    ]);
}

export default subscribe();
