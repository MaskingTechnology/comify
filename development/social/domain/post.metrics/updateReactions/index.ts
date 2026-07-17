
import retrieve from '../_retrieveByPost';
import type { CountOperation } from '../definitions';
import update from '../_update';

export default async function run(postId: string, operation: CountOperation): Promise<number>
{
    const record = await retrieve(postId);

    const reactions = operation === 'increase'
        ? record.reactions + 1
        : record.reactions - 1;

    await update(record.id, { reactions });

    return reactions;
}
