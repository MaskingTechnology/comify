
import type { CountOperation } from '../definitions';
import retrieve from '../_retrieveByCreator';
import update from '../_update';

export default async function updateFollowing(creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const following = operation === 'increase'
        ? record.following + 1
        : record.following - 1;

    await update(record.id, { following });

    return following;
}
