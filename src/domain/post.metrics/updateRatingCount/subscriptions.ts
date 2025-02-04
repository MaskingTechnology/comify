
import { subscribe as subscribeToRatingToggled } from '^/domain/rating/toggle';

import updateRatingCount from './updateRatingCount';

async function subscribe(): Promise<void>
{
    await subscribeToRatingToggled(({ postId, rated }) =>
    {
        const operation = rated ? 'increase' : 'decrease';

        return updateRatingCount(postId, operation);
    });
}

export default subscribe();
