
import type { TenantId } from '@comify/common/domain/tenant';

import type { Creator } from '~/creator';

import type { Record, Relation } from '../definitions';

export default async function (record: Record, creator: Creator): Promise<Relation>
{
    return {
        following: creator,
        established: record.id !== undefined,
        self: record.followerId === record.followingId
    };
}
