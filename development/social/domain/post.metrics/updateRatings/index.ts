
import { type CountOperation } from '@comify/common/primitives/count';
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieve from '../_retrieveByPost';


import persist from './persist';
import updateCount from './updateCount';

export default async function (postId: Identifier, operation: CountOperation): Promise<void>
{
    const record = await retrieve(postId);

    const ratings = updateCount(record, operation);

    return persist(record.id, ratings);
}
