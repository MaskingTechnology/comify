
import type { Identifier } from '@comify/common/primitives/identifier';

import { Types } from '../definitions';
import create from '../_create';

export default async function (followerId: Identifier, followingId: Identifier): Promise<void>
{
    return create(Types.STARTED_FOLLOWING, followerId, followingId);
}
