
import getByCreator from '../_retrieveByCreator';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function updateFollowing(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const following = operation === 'increase'
        ? data.following + 1
        : data.following - 1;

    await update(data.id, { following });

    return following;
}
