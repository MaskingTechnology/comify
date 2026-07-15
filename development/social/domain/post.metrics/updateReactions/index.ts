
import retrieveByPost from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function run(postId: string, operation: CountOperation): Promise<number>
{
    const data = await retrieveByPost(postId);

    const reactions = operation === 'increase'
        ? data.reactions + 1
        : data.reactions - 1;

    await update(data.id, { reactions });

    return reactions;
}
