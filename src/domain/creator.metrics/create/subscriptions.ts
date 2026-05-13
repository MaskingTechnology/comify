
import { subscribe as subscribeToCreatorRegistered } from '^/domain/creator/register';

import create from './create';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToCreatorRegistered(({ creatorId }) => create(creatorId)),
    ]);
}

subscriptions();
