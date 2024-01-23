
import NotificationData from './NotificationData.js';

export default async function retrieveData(id: string): Promise<NotificationData>
{
    return new NotificationData(id, '0', '0', 'unknown');
}
