
import { type Identifier } from '@comify/common/primitives/identifier';

import retrieveFollowerData from '~/relation/_retrieveFollowing';

export default async function (creatorId: Identifier): Promise<Identifier[]>
{
    const followerData = await retrieveFollowerData(creatorId);

    return followerData.map(record => record.followingId);
}
