
import { type Requester } from '@comify/common/security';

import type { Post } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(requester: Requester, ids: string[]): Promise<Map<string, Post>>
{
    const records = await retrieve(requester.tenantId, ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all posts were retrieved');
    }

    return toModels(requester, records);
}
