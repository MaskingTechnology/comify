
import type NotificationData from '../data/NotificationData.js';
import mapFrom from './mapFrom';

export default async function retrieve(id: string): Promise<NotificationData>
{
    const record = {
        id: id,
        type: 'type',
        senderId: 'senderId',
        receiverId: 'receiverId',
        postId: 'postId',
        reactionId: 'reactionId',
        createdAt: '2024-05-17T2024-05-16T15:10:44.292Z'
    };

    return mapFrom(record);
}
