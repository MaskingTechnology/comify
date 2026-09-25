
import { type TenantId } from '@comify/common/domain/tenant';
import database from '@comify/common/integrations/database';
import { type Identifier } from '@comify/common/primitives/identifier';

import { RECORD_TYPE, type Record } from '../definitions';
import { logger } from '../integrations';

import PostNotFound from './PostNotFound';

export default async function (tenantId: TenantId, id: Identifier): Promise<Record>
{
    const result = await database.readRecord<Record>(RECORD_TYPE, {
        tenantId: { EQUALS: tenantId },
        id: { EQUALS: id },
        deleted: { EQUALS: false }
    });

    if (result.notFound)
    {
        logger.warn(`Post with id '${id}' could not be found.`);

        throw new PostNotFound();
    }

    return result.record!;
}
