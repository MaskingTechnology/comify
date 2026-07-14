
import { subscribe as subscribeToRatingToggled } from '~/rating/toggle';

import updateRatings from './updateRatings';

export default async function subscriptions(): Promise<void>
{
    await Promise.all([

        subscribeToRatingToggled(({ postId, rated }) =>
        {
            const operation = rated ? 'increase' : 'decrease';

            return updateRatings(postId, operation);
        })

    ]);
}

subscriptions();
