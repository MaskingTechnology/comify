
import getByCreator from '../getByCreator';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateFollowing(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const following = operation === 'increase'
        ? data.following + 1
        : data.following - 1;

    await update(data.id, { following });

    return following;
}
