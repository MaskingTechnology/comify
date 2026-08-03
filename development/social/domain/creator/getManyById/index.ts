
import type { Identifier } from '@comify/common/primitives/identifier';
import type { TenantId } from '@comify/common/domain/tenant';

import type { Creator } from '../definitions';
import { logger } from '../integrations';
import toModels from '../_toModels';

import retrieve from './retrieve';

export default async function (tenantId: TenantId, ids: Identifier[]): Promise<Map<Identifier, Creator>>
{
    const records = await retrieve(tenantId, ids);

    if (ids.length !== records.length)
    {
        logger.warn('Not all creators were retrieved');
    }

    return toModels(records);
}
