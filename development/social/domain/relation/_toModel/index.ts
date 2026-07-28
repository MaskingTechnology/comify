
import getCreatorData from '~/creator/getById';

import type { Record, Relation } from '../definitions';

export default async function (tenantId: string, record: Record): Promise<Relation>
{
    const followingData = await getCreatorData(tenantId, record.followingId);

    return {
        following: followingData,
        established: record.id !== undefined,
        self: record.followerId === record.followingId
    };
}
