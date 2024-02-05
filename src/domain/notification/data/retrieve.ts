
import NotificationData from './NotificationData.js';

export default async function retrieve(id: string): Promise<NotificationData>
{
    return new NotificationData(id, 'type', 'senderId', 'receiverId', undefined, undefined);
}
