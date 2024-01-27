
import retrieveRecent from './data/retrieveRecent';
import type NotificationView from './NotificationView';
import createView from './createView';

export default async function getRecent(): Promise<NotificationView[]>
{
    const data = await retrieveRecent('0');

    return Promise.all(data.map(createView));
}
