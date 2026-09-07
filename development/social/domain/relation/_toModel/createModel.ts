
import { type Creator } from '~/creator';

import { type Record, type Relation } from '../definitions';

export default async function (record: Record, creator: Creator): Promise<Relation>
{
    return {
        following: creator,
        established: record.id !== undefined,
        self: record.followerId === record.followingId
    };
}
