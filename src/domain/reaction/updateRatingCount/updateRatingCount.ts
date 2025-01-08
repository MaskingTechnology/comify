
import getById from '../getById';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updateRatingCount(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const ratingCount = operation === 'increase'
        ? data.ratingCount + 1
        : data.ratingCount - 1;

    await update(id, { ratingCount });

    return ratingCount;
}
