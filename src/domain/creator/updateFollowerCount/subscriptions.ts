
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowerCount from './updateFollowerCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished(({ followingId }) => updateFollowerCount(followingId, 'increase'))
    ]);
}

export default subscribe();
