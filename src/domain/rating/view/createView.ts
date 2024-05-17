
import type Requester from '^/domain/authentication/Requester';
import getCreatorView from '^/domain/creator/get';
import getPostView from '^/domain/post/get';
import getReactionView from '^/domain/reaction/get';

import type RatingData from '../data/RatingData';
import RatingView from './RatingView';

export default async function createView(requester: Requester, data: RatingData): Promise<RatingView>
{
    const [creatorView, postView, reactionView] = await Promise.all([
        getCreatorView(data.creatorId),
        data.postId !== undefined ? getPostView(requester, data.postId) : undefined,
        data.reactionId !== undefined ? getReactionView(requester, data.reactionId) : undefined,
    ]);

    return new RatingView(data.id, new Date(), creatorView, postView, reactionView);
}
