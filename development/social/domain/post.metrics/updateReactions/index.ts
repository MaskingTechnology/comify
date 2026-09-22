
import { type CountOperation } from '@comify/common/primitives/count';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieve from '../_retrieveByPost';

import persist from './persist';
import updateCount from './updateCount';

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

    return persist(parentMetricsRecord.id, reactions);
}
