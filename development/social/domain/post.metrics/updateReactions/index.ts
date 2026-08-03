
import type { CountOperation } from '@comify/common/primitives/count';
import type { Identifier } from '@comify/common/primitives/identifier';

import { logger } from '../integrations';
import retrieve from '../_retrieveByPost';

import updateCount from './updateCount';
import persist from './persist';

export default async function (parentId: Identifier | undefined, operation: CountOperation): Promise<void>
{
    if (parentId === undefined)
    {
        // No parent id means we're dealing with a root post,
        // so we can't count it as a reaction.

        return;
    }

    const parentMetricsRecord = await retrieve(parentId);

    const reactions = updateCount(parentMetricsRecord, operation);

    const succeeded = await persist(parentMetricsRecord.id, reactions);

    if (succeeded === false)
    {
        logger.warn(`Reaction count for post metrics with id '${parentMetricsRecord.id}' has not been updated.`);
    }
}
