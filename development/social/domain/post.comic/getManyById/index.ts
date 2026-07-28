
import { type Comic } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (ids: string[]): Promise<Map<string, Comic>>
{
    const records = await retrieve(ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all comics were retrieved');
    }

    return toModels(records);
}
