
import { subscribe as subscribeToPostCreated } from '~/post/create';

import create from './create';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostCreated(({ postId }) => create(postId)),
    ]);
}

export default subscribe();
