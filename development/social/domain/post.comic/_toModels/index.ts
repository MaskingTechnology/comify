
import getImageData from '~/image/getManyById';

import { type Record, type Comic } from '../definitions';
import { logger } from '../integrations';

export default async function run(records: Record[]): Promise<Map<string, Comic>>
{
    const imageIds = new Set(records.map(record => record.imageId));

    const imageDataMap = await getImageData([...imageIds]);

    const map = new Map();

    records.map(record =>
    {
        const imageData = imageDataMap.get(record.imageId);

        if (imageData === undefined) return logger.warn(`Image data for comic with id ${record.id} not found`);

        map.set(record.id, { imageData });
    });

    return map;
}
