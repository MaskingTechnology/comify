
import getByCreator from '../getByCreator';
import type { CountOperation } from '../types';
import update from '../update';

export default async function updatePosts(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await getByCreator(creatorId);

    const posts = operation === 'increase'
        ? data.posts + 1
        : data.posts - 1;

    await update(data.id, { posts });

    return posts;
}
