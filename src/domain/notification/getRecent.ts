
import type Requester from '../authentication/Requester';
import retrieveRecent from './data/retrieveRecent';
import type NotificationView from './view/NotificationView';
import createView from './view/createView';

export default async function getRecent(requester: Requester): Promise<NotificationView[]>
{
    const data = await retrieveRecent(requester.id);

    const views = data.map(item => createView(requester, item));

    return Promise.all(views);
}
