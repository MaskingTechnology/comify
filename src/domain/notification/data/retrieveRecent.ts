
import NotificationData from './NotificationData';

import { notifications } from '../../dummydata';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function retrieveRecent(recipientId: string): Promise<NotificationData[]>
{
    return Array.from(notifications.values());
}
