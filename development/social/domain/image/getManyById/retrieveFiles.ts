
import fileStore from '@comify/common/integrations/fileStore';
import { logger } from '../integrations';

export default async function (storageKeys: string[]): Promise<Map<string, Buffer>>
{
    const results = await Promise.allSettled(storageKeys.map(key => fileStore.readFile(key)));

    const map = new Map();

    results.forEach((result, index) =>
    {
        const key = storageKeys[index];

        if (result.status !== 'fulfilled')
        {
            logger.warn(`Failed to retrieve file for key ${key}`);

            return;
        }

        map.set(key, result.value);
    });

    return map;
}
