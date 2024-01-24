
import retrieveCreatorView from '../creator/retrieveView';

import type NotificationData from './NotificationData';
import NotificationView from './NotificationView';

export default async function createView(data: NotificationData): Promise<NotificationView>
{
    const senderView = await retrieveCreatorView(data.senderId);

    return new NotificationView(data.id, senderView);
}
