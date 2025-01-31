
import { subscribe as subscribeToPostRated } from '^/domain/post/toggleRating';
import { subscribe as subscribeToReactionCreated } from '^/domain/reaction/create';
import { subscribe as subscribeToReactionRated } from '^/domain/reaction/toggleRating';
import { subscribe as subscribeToRelationEstablished } from '^/domain/relation/establish';

import addedReaction from './addedReaction';
import ratedPost from './ratedPost';
import ratedReaction from './ratedReaction';
import startedFollowing from './startedFollowing';

async function subscribe(): Promise<void>
{
    await Promise.all([
        subscribeToPostRated((requesterId, creatorId, postId) => ratedPost(requesterId, creatorId, postId)),
        subscribeToReactionRated((requesterId, creatorId, reactionId) => ratedReaction(requesterId, creatorId, reactionId)),
        subscribeToRelationEstablished((requesterId, creatorId) => startedFollowing(requesterId, creatorId)),
        subscribeToReactionCreated((creatorId, reactionId, targetCreatorId, targetPostId, targetReactionId) => addedReaction(creatorId, targetCreatorId, reactionId, targetPostId, targetReactionId))
    ]);
}

export default subscribe();
