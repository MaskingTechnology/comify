
import type { Metrics } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (postIds: string[]): Promise<Map<string, Metrics>>
{
    const records = await retrieve(postIds);

    if (postIds.length !== records.length)
    {
        logger.warn('Not all post metrics were retrieved');
    }

    return toModels(records);
}
