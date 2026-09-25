
import { type Identifier } from '@comify/common/primitives/identifier';

import createRecord from './createRecord';
import persist from './persist';

export default async function (creatorId: Identifier): Promise<void>
{
    const record = createRecord(creatorId);

    await persist(record);
}
