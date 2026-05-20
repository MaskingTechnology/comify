
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import updateFollowing from './updateFollowing';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished(({ followerId }) => updateFollowing(followerId, 'increase'))
    ]);
}

subscriptions();
