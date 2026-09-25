
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Record } from '../definitions';

import retrieve from './retrieve';

export default async function (creatorId: Identifier): Promise<Record>
{
    const record = await retrieve(creatorId);

    return record;
}
