import { type RecordData } from '^/integrations/database/module';
import type NotificationData from '../data/NotificationData';

export default function mapTo(data: NotificationData): RecordData
{
    return {
        id: data.id,
        type: data.type,
        senderId: data.senderId,
        receiverId: data.receiverId,
        postId: data.postId,
        reactionId: data.reactionId,
        createdAt: data.createdAt.toISOString()
    };
}
