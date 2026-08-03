
import type { Identifier } from '@comify/common/primitives/identifier';

import createRecord from './createRecord';
import persist from './persist';

export default async function (postId: Identifier): Promise<void>
{
    const record = createRecord(postId);

    await persist(record);
}
