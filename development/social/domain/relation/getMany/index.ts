
import { type Requester } from '@comify/common/security';

import type { RelationKey, Relation } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function run(requester: Requester, keys: RelationKey[]): Promise<Map<string, Relation>>
{
    const records = await retrieve(keys);

    if (keys.length !== records.length)
    {
        logger.warn('Not all creators were retrieved');
    }

    return toModels(requester.tenantId, records);
}
