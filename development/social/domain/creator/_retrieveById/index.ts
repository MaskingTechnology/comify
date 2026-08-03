
import type { TenantId } from '@comify/common/domain/tenant';
import type { Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';
import { logger } from '../integrations';
import CreatorNotFound from './CreatorNotFound';

import retrieve from './retrieve';

export default async function (tenantId: TenantId, id: Identifier): Promise<Record>
{
    const record = await retrieve(tenantId, id);

    if (record === undefined)
    {
        logger.warn(`Creator for tenant '${tenantId}' with id '${id}' could not be found.`);

        throw new CreatorNotFound();
    }

    return record;
}

export { CreatorNotFound };
