
import getByCreator from '../getByCreator';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateFollowerCount(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const followerCount = operation === 'increase'
        ? data.followerCount + 1
        : data.followerCount - 1;

    await update(data.id, { followerCount });

    return followerCount;
}
