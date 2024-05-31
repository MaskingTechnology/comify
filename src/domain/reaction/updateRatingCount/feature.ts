
import getById from '../getById/feature';
import update from '../update/feature';

import type { CountOperation } from '../types';

export default async function feature(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const ratingCount = operation === 'increase'
        ? data.ratingCount + 1
        : data.ratingCount - 1;

    await update(id, { ratingCount });

    return ratingCount;
}
