
import getById from '../getById/feature';
import update from '../update/feature';

import { CountOperation } from '../types';

export default async function feature(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const followingCount = operation === 'increase'
        ? data.followerCount + 1
        : data.followerCount - 1;

    await update(id, { followingCount });

    return followingCount;
}
