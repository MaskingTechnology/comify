
import type { CountOperation } from '@comify/common/primitives/count';
import type { Identifier } from '@comify/common/primitives/identifier';

import { logger } from '../integrations';
import retrieve from '../_retrieveByCreator';

import updateCount from './updateCount';
import persist from './persist';

export default async function (creatorId: Identifier, operation: CountOperation): Promise<void>
{
    const record = await retrieve(creatorId);

    const followers = updateCount(record, operation);

    const succeeded = await persist(record.id, followers);

    if (succeeded === false)
    {
        logger.warn(`Followers count for creator metrics with id '${record.id}' has not been updated.`);
    }
}
