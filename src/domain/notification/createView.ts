
import retrieveCreatorView from '../creator/get';

import type NotificationData from './data/NotificationData';
import NotificationView from './NotificationView';

export default async function createView(data: NotificationData): Promise<NotificationView>
{
    const senderView = await retrieveCreatorView(data.senderId);

    return new NotificationView(data.id, senderView);
}
