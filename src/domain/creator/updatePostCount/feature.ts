
import getById from '../getById/feature';
import update from '../update/feature';

import type { CountOperation } from '../types';

export default async function feature(id: string, operation: CountOperation): Promise<number>
{
    const data = await getById(id);

    const postCount = operation === 'increase'
        ? data.postCount + 1
        : data.postCount - 1;

    await update(id, { postCount });

    return postCount;
}
