
import type { TenantId } from '@comify/common/domain/tenant';
import type { CountOperation } from '@comify/common/primitives/count';
import type { Identifier } from '@comify/common/primitives/identifier';

import retrievePost from '~/post/_retrieveById';

import { logger } from '../integrations';
import retrieveMetrics from '../_retrieveByCreator';

import updateCount from './updateCount';
import persist from './persist';

export default async function (tenantId: TenantId, creatorId: Identifier, parentId: Identifier | undefined, operation: CountOperation): Promise<void>
{
    if (parentId !== undefined)
    {
        // Only root posts are counted

        return;
    }

    const metricsRecord = await retrieveMetrics(creatorId);

    const posts = updateCount(metricsRecord, operation);

    const succeeded = await persist(metricsRecord.id, posts);

    if (succeeded === false)
    {
        logger.warn(`Post count for creator metrics with id '${metricsRecord.id}' has not been updated.`);
    }
}
