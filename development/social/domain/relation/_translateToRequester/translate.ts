
import get from '../_retrieve';
import type { Data } from '../definitions';

import type { Mapping } from './definitions';

export default async function translate(requesterId: string, mapping: Mapping, data: Data): Promise<Data>
{
    const followingId: string = mapping === 'follower'
        ? data.followerId
        : data.followingId;

    if (requesterId === data.followerId && followingId === data.followingId)
    {
        return data;
    }

    return get(requesterId, followingId);
}
