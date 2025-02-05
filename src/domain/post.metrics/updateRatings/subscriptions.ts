
import { subscribe as subscribeToRatingToggled } from '^/domain/rating/toggle';

import updateRatings from './updateRatings';

async function subscribe(): Promise<void>
{
    await subscribeToRatingToggled(({ postId, rated }) =>
    {
        const operation = rated ? 'increase' : 'decrease';

        return updateRatings(postId, operation);
    });
}

export default subscribe();
