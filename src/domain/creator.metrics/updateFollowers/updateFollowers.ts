
import getByCreator from '../getByCreator';
import type { CountOperation } from '../types';
import update from '../update';

export default async function updateFollowers(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const followers = operation === 'increase'
        ? data.followers + 1
        : data.followers - 1;

    await update(data.id, { followers });

    return followers;
}
