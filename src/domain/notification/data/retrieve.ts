
import NotificationData from './NotificationData.js';

import { notifications } from '../../dummydata';

export default async function retrieve(id: string): Promise<NotificationData>
{
    return notifications.get(id) as NotificationData;
}
