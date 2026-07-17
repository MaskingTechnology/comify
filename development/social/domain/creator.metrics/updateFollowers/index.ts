
import type { CountOperation } from '../definitions';
import retrieve from '../_retrieveByCreator';
import update from '../_update';

export default async function updateFollowers(creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const followers = operation === 'increase'
        ? record.followers + 1
        : record.followers - 1;

    await update(record.id, { followers });

    return followers;
}
