
import type NotificationView from './NotificationView';
import createView from './createView';
import retrieve from './data/retrieve';

export default async function get(id: string): Promise<NotificationView>
{
    const data = await retrieve(id);

    return createView(data);
}
