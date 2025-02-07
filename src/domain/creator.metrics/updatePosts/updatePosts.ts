
import getByCreator from '../getByCreator';
import update from '../update';

import type { CountOperation } from '../types';

export default async function updatePosts(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const posts = operation === 'increase'
        ? data.posts + 1
        : data.posts - 1;

    await update(data.id, { posts });

    return posts;
}
