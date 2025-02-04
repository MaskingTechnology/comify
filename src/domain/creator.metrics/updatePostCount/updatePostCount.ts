
import getByCreator from '../getByCreator';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updatePostCount(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const postCount = operation === 'increase'
        ? data.postCount + 1
        : data.postCount - 1;

    await update(data.id, { postCount });

    return postCount;
}
