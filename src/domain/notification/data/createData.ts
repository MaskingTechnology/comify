
import { generateId } from '^/integrations/utilities/crypto';
import NotificationData from './NotificationData';

export default function createData(type: string, senderId: string, receiverId: string, postId: string, reactionId: string): NotificationData
{
    const id = generateId();
    const createdAt = new Date();

    return new NotificationData(id, type, senderId, receiverId, postId, reactionId, createdAt);
}
