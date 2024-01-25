
import retrieveCreatorView from '../creator/retrieveView';
import retrievePostView from '../post/retrieveView';
import retrieveReactionView from '../reaction/retrieveView.js';

import type RatingData from './RatingData';
import RatingView from './RatingView';

export default async function createView(data: RatingData): Promise<RatingView>
{
    const [creatorView, postView, reactionView] = await Promise.all([
        retrieveCreatorView(data.creatorId),
        data.postId !== undefined ? retrievePostView(data.postId) : undefined,
        data.reactionId !== undefined ? retrieveReactionView(data.reactionId) : undefined,
    ]);

    return new RatingView(data.id, new Date(), creatorView, postView, reactionView);
}
