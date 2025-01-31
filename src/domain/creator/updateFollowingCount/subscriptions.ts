
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowingCount from './updateFollowingCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished((requesterId) => updateFollowingCount(requesterId, 'increase'))
    ]);
}

export default subscribe();
