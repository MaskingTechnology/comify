
import getCreatorData from '~/creator/getById';

import type { Data, Relation } from '../definitions';

export default async function run(tenantId: string, data: Data): Promise<Relation>
{
    const followingData = await getCreatorData(tenantId, data.followingId);

    return {
        following: followingData,
        established: data.id !== undefined,
        self: data.followerId === data.followingId
    };
}
