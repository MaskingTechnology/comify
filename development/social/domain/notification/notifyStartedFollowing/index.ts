
import { type Identifier } from '@comify/common/primitives/identifier';

import create from '../_create';
import { Types } from '../definitions';

export default async function (followerId: Identifier, followingId: Identifier): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
