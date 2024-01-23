
import retrieveCreatorData from '../creator/retrieveData';
import createCreatorView from '../creator/createView';

import type NotificationData from './NotificationData';
import NotificationView from './NotificationView';

export default async function createView(data: NotificationData): Promise<NotificationView>
{
    const senderData = await retrieveCreatorData(data.senderId);
    const senderView = await createCreatorView(senderData);

    return new NotificationView(data.id, senderView);
}
