
import getById from '../getById';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateFollowingCount(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const followingCount = operation === 'increase'
        ? data.followingCount + 1
        : data.followingCount - 1;

    await update(id, { followingCount });

    return followingCount;
}
