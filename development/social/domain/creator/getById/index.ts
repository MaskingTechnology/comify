
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import type { Creator } from '../definitions';
import { logger } from '../integrations';
import toModel from '../_toModel';

import retrieve from './retrieve';
import CreatorNotFound from './CreatorNotFound';

export default async function (tenantId: TenantId, id: Identifier): Promise<Creator>
{
    const record = await retrieve(tenantId, id);

    if (record === undefined)
    {
        logger.warn(`Creator for tenant '${tenantId}' with id '${id}' could not be found.`);

        throw new CreatorNotFound();
    }

    return toModel(record);
}
