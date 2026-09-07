
import { type TenantId } from '@comify/common/domain/tenant';
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';
import { logger } from '../integrations';

import PostNotFound from './PostNotFound';
import retrieve from './retrieve';

export default async function (tenantId: TenantId, id: Identifier): Promise<Record>
{
    const record = await retrieve(tenantId, id);

    if (record === undefined)
    {
        logger.warn(`Post with id '${id}' could not be found.`);

        throw new PostNotFound();
    }

    return record;
}
