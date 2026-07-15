
import type { Data } from '../definitions';

export default function isNotOwner(post: Data, requesterId: string): boolean
{
    return post.creatorId !== requesterId;
}
