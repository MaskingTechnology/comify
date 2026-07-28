
import type { Creator } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(tenantId: string, ids: string[]): Promise<Map<string, Creator>>
{
    const records = await retrieve(tenantId, ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all creators were retrieved');
    }

    return toModels(records);
}
