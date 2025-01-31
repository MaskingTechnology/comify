
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowerCount from './updateFollowerCount';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished((requesterId) => updateFollowerCount(requesterId, 'increase'))
    ]);
}

export default subscribe();
