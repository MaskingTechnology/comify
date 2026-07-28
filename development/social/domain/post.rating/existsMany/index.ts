
import { type RatingKey } from '../definitions';
import { logger } from '../integrations';

import retrieve from './retrieve';

export default async function (keys: RatingKey[]): Promise<Map<string, boolean>>
{
    const records = await retrieve(keys);

    if (keys.length !== records.length)
    {
        logger.warn('Not all ratings were retrieved');
    }

    const map = new Map();

    records.forEach(record =>
    {
        map.set(record.id, true);
    });

    return map;
}
