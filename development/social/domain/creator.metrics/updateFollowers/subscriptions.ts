
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowerCount from './updateFollowers';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished(({ followingId }) => updateFollowerCount(followingId, 'increase'))
    ]);
}

subscriptions();
