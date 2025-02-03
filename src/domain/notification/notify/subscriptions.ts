
import { subscribe as subscribeToPostCreated } from '^/domain/post/create';
import { subscribe as subscribeToPostRated } from '^/domain/post/toggleRating';
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import reactedToPost from './createdPost';
import ratedPost from './ratedPost';
import startedFollowing from './startedFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated(({ raterId, creatorId, postId }) => ratedPost(raterId, creatorId, postId)),
        subscribeToRelationEstablished(({ followerId, followingId }) => startedFollowing(followerId, followingId)),
        subscribeToPostCreated(({ creatorId, parentCreatorId, postId }) => reactedToPost(creatorId, parentCreatorId, postId))
    ]);
}

export default subscribe();
