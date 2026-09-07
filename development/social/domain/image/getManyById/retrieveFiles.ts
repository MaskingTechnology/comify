
import fileStore from '@comify/common/integrations/files';

export default async function (storageKeys: string[]): Promise<Map<string, Buffer>>
{
    const results = await Promise.allSettled(storageKeys.map(key => fileStore.readFile(key)));

    const map = new Map();

    results.forEach((result, index) =>
    {
        const key = storageKeys[index];

        if (result.status !== 'fulfilled') return;

        map.set(key, result.value);
    });

    return map;
}
