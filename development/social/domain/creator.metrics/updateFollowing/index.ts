
import { type CountOperation } from '@comify/common/primitives/count';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieve from '../_retrieveByCreator';
import { logger } from '../integrations';

import persist from './persist';
import updateCount from './updateCount';

export default async function (creatorId: Identifier, operation: CountOperation): Promise<void>
{
    const record = await retrieve(creatorId);

    const following = updateCount(record, operation);

    const succeeded = await persist(record.id, following);

    if (succeeded === false)
    {
        logger.warn(`Following count for creator metrics with id '${record.id}' has not been updated.`);
    }
}
