
import { subscribe as onPostAdded } from '@comify/common/domain/post/added';
import { subscribe as onPostRemoved } from '@comify/common/domain/post/removed';
import { subscribe as onRatingAdded } from '@comify/common/domain/post.rating/added';
import { subscribe as onRatingRemoved } from '@comify/common/domain/post.rating/removed';

import createMetrics from './create';
import updateReactionCount from './updateReactions';
import updateRatingCount from './updateRatings';

export default async function subscribe(): Promise<void>
{
    await Promise.all([
        onPostAdded(({ postId }) => createMetrics(postId)),
        onPostAdded(({ parentId }) => updateReactionCount(parentId, 'increase')),
        onPostRemoved(({ parentId }) => updateReactionCount(parentId, 'decrease')),
        onRatingAdded(({ postId }) => updateRatingCount(postId, 'increase')),
        onRatingRemoved(({ postId }) => updateRatingCount(postId, 'decrease'))
    ]);
}

subscribe();
