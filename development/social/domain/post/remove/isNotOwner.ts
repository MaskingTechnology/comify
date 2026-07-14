
import type { BaseData } from '../definitions';

export default function isNotOwner(post: DataModel, requesterId: string): boolean
{
    return post.creatorId !== requesterId;
}
