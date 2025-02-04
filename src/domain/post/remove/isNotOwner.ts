
import { DataModel } from '../types';

export default function isNotOwner(post: DataModel, requesterId: string): boolean
{
    return post.creatorId !== requesterId;
}
