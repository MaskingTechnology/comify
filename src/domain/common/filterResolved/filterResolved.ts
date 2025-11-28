
import logger from '@theshelf/logging';

export default async function filterResolved<T>(items: Promise<T>[]): Promise<T[]>
{
    const promises = await Promise.allSettled(items);

    const results: T[] = [];

    promises.forEach((promise) =>
    {
        if (promise.status === 'rejected')
        {
            logger.logError('Promise rejected', promise.reason);

            return;
        }

        results.push(promise.value);
    });

    return results;
}
