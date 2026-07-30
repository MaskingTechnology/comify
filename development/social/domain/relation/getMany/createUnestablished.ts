
import { type Record } from '../definitions';

export default function (followerId: string, followingId: string): Record
{
    return { id: undefined, followerId, followingId };
}
