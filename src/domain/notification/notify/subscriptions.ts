
import { subscribe as subscribeToPostRated } from '^/domain/post/toggleRating';
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import postRated from './postRated';
import startedFollowing from './startedFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated((requesterId, creatorId, postId) => postRated(requesterId, creatorId, postId)),
        subscribeToRelationEstablished((requesterId, creatorId) => startedFollowing(requesterId, creatorId)),
    ]);
}

export default subscribe();
