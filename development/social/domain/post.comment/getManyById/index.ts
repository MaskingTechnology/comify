
import type { Comment } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(ids: string[]): Promise<Map<string, Comment>>
{
    const records = await retrieve(ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all comments were retrieved');
    }

    return toModels(records);
}
