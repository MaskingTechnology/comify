
import type { DataModel } from '../types';

export default async function feature(id: string): Promise<DataModel>
{
    return { id, createdAt: 'now', type: 'type', senderId: 'senderId', receiverId: 'receiverId', postId: undefined, reactionId: undefined };
}
