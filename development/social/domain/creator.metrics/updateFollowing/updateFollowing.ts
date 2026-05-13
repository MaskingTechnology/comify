
import getByCreator from '../getByCreator';
import type { CountOperation } from '../types';
import update from '../update';

export default async function updateFollowing(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const following = operation === 'increase'
        ? data.following + 1
        : data.following - 1;

    await update(data.id, { following });

    return following;
}
