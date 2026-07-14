
import { subscribe as subscribeToPostCreated } from '~/post/create';

import create from './create';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToPostCreated(({ postId }) => create(postId)),
    ]);
}

subscriptions();
