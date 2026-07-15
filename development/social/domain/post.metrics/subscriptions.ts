
import { subscribe as subscribeToPostCreated } from '~/post/_create';
import { subscribe as subscribeToRatingToggled } from '~/rating/toggle';
import { subscribe as subscribeToPostRemoved } from '~/post/remove';

import updateReactions from './updateReactions';
import updateRatings from './updateRatings';
import create from './create';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([
        subscribeToPostCreated(({ postId }) => create(postId)),

        subscribeToRatingToggled(({ postId, rated }) =>
        {
            const operation = rated ? 'increase' : 'decrease';

            return updateRatings(postId, operation);
        }),

        subscribeToPostCreated(({ parentId }) =>
        {
            if (parentId === undefined) return;

            return updateReactions(parentId, 'increase');
        }),

        subscribeToPostRemoved(({ parentId }) =>
        {
            if (parentId === undefined) return;

            return updateReactions(parentId, 'decrease');
        })
    ]);
}

subscriptions();
