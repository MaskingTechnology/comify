
import logger from '^/integrations/logging';

export default async function filterResolved<T>(items: Promise<T>[]): Promise<T[]>
{
    const promises = await Promise.allSettled(items);

    const results: T[] = [];

    promises.forEach((promise) =>
    {
        if (promise.status === 'rejected')
        {
            logger.error('Promise rejected', promise.reason);

            return;
        }

        results.push(promise.value);
    });

    return results;
}
