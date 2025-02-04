
import getByCreator from '../getByCreator';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateFollowingCount(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const followingCount = operation === 'increase'
        ? data.followingCount + 1
        : data.followingCount - 1;

    await update(data.id, { followingCount });

    return followingCount;
}
