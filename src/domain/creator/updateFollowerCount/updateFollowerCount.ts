
import getById from '../getById';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateFollowerCount(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const followerCount = operation === 'increase'
        ? data.followerCount + 1
        : data.followerCount - 1;

    await update(id, { followerCount });

    return followerCount;
}
