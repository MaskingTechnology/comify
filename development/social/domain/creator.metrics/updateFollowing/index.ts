
import { type CountOperation } from '@comify/common/primitives/count';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieve from '../_retrieveByCreator';

import persist from './persist';
import updateCount from './updateCount';

export default async function (creatorId: Identifier, operation: CountOperation): Promise<void>
{
    const record = await retrieve(creatorId);

    const following = updateCount(record, operation);

    return persist(record.id, following);
}
