
import retrieveCount from './retrieveCount';
import updateCount from './updateCount';

export type Operation = 'increase' | 'decrease';

export default async function feature(postId: string, operation: Operation): Promise<number>
{
    const currentCount = await retrieveCount(postId);

    const newCount = operation === 'increase'
        ? currentCount + 1
        : currentCount - 1;

    await updateCount(postId, newCount);

    return newCount;
}
