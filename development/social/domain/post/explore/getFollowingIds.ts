
import type { Identifier } from '@comify/common/primitives/identifier';

import retrieveFollowing from '~/relation/_retrieveFollowing';

export default async function (creatorId: Identifier): Promise<Identifier[]>
{
    const followingRecords = await retrieveFollowing(creatorId);

    const excludedCreatorIds = followingRecords.map(record => record.followingId);
    excludedCreatorIds.push(creatorId);

    return excludedCreatorIds;
}
