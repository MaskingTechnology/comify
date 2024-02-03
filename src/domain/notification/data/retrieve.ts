
import type Requester from '../../authentication/Requester';

import NotificationData from './NotificationData.js';

export default async function retrieve(id: string, requester?: Requester): Promise<NotificationData>
{
    return new NotificationData(id, 'type', 'senderId', 'receiverId', undefined, undefined);
}
