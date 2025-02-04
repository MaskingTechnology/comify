
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowingCount from './updateFollowingCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished(({ followerId }) => updateFollowingCount(followerId, 'increase'))
    ]);
}

export default subscribe();
