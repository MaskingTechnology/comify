
import { type TenantId } from '@comify/common/domain/tenant';
import { type CountOperation } from '@comify/common/primitives/count';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieveMetrics from '../_retrieveByCreator';

import persist from './persist';
import updateCount from './updateCount';

export default async function (tenantId: TenantId, creatorId: Identifier, parentId: Identifier | undefined, operation: CountOperation): Promise<void>
{
    if (parentId !== undefined)
    {
        // Only root posts are counted

        return;
    }

    const metricsRecord = await retrieveMetrics(creatorId);

    const posts = updateCount(metricsRecord, operation);

    return persist(metricsRecord.id, posts);
}
