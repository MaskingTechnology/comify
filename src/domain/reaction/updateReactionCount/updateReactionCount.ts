
import getById from '../getById';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateReactionCount(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const reactionCount = operation === 'increase'
        ? data.reactionCount + 1
        : data.reactionCount - 1;

    await update(id, { reactionCount });

    return reactionCount;
}
