
import { subscribe as subscribeToCreatorRegistered } from '^/domain/creator/register';

import create from './create';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToCreatorRegistered(({ creatorId }) => create(creatorId)),
    ]);
}

export default subscribe();
