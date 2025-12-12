
import { subscribe as subscribeToRelationEstablished } from '~/relation/establish';

import updateFollowing from './updateFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToRelationEstablished(({ followerId }) => updateFollowing(followerId, 'increase'))
    ]);
}

export default subscribe();
