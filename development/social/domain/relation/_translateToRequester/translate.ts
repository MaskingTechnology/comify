
import retrieve from '../_retrieve';
import type { Record } from '../definitions';

import type { Mapping } from './definitions';

export default async function (requesterId: string, mapping: Mapping, record: Record): Promise<Record>
{
    const followingId: string = mapping === 'follower'
        ? record.followerId
        : record.followingId;

    if (requesterId === record.followerId && followingId === record.followingId)
    {
        return record;
    }

    return retrieve(requesterId, followingId);
}
