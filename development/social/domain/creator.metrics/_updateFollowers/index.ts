
import retrieveByCreator from '../_retrieveByCreator';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function updateFollowers(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await retrieveByCreator(creatorId);

    const followers = operation === 'increase'
        ? data.followers + 1
        : data.followers - 1;

    await update(data.id, { followers });

    return followers;
}
