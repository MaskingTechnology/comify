
import retrieveByCreator from '../_retrieveByCreator';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function updatePosts(creatorId: string, operation: CountOperation): Promise<number>
{
    const data = await retrieveByCreator(creatorId);

    const posts = operation === 'increase'
        ? data.posts + 1
        : data.posts - 1;

    await update(data.id, { posts });

    return posts;
}
