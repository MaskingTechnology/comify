
import type { Metrics } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(creatorIds: string[]): Promise<Map<string, Metrics>>
{
    const records = await retrieve(creatorIds);

    if (creatorIds.length !== records.length)
    {
        logger.warn('Not all creator metrics were retrieved');
    }

    return toModels(records);
}
