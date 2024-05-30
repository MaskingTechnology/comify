
import getById from '../getById/feature';
import update from '../update/feature';

import type { CountOperation } from '../types';

export default async function feature(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const followingCount = operation === 'increase'
        ? data.followingCount + 1
        : data.followingCount - 1;

    await update(id, { followingCount });

    return followingCount;
}
