
import type { CountOperation } from '@comify/common/primitives/count';
import type { Identifier } from '@comify/common/primitives/identifier';

import { logger } from '../integrations';
import retrieve from '../_retrieveByPost';

import updateCount from './updateCount';
import persist from './persist';

export default async function (postId: Identifier, operation: CountOperation): Promise<void>
{
    const record = await retrieve(postId);

    const ratings = updateCount(record, operation);

    const succeeded = await persist(record.id, ratings);

    if (succeeded === false)
    {
        logger.warn(`Rating count for post metrics with id '${record.id}' has not been updated.`);
    }
}
