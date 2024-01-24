
import type NotificationView from './NotificationView';
import retrieveData from './retrieveData';
import createView from './createView';

export default async function retrieveView(id: string): Promise<NotificationView>
{
    const data = await retrieveData(id);

    return createView(data);
}
