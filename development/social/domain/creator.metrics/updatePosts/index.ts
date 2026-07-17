
import type { CountOperation } from '../definitions';
import retrieve from '../_retrieveByCreator';
import update from '../_update';

export default async function updatePosts(creatorId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(creatorId);

    const posts = operation === 'increase'
        ? record.posts + 1
        : record.posts - 1;

    await update(record.id, { posts });

    return posts;
}
