
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';

import create from './create';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToPostCreated(({ postId }) => create(postId)),
    ]);
}

subscriptions();
