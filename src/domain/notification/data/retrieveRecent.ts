
import NotificationData from './NotificationData';

import { notifications } from '../../dummydata';

export default async function retrieveRecent(recipientId: string): Promise<NotificationData[]>
{
    return Array.from(notifications.values());
}
