
import type Requester from '../authentication/Requester';
import retrieve from './repository/retrieve';
import type NotificationView from './view/NotificationView';
import createView from './view/createView';

export default async function get(requester: Requester, id: string): Promise<NotificationView>
{
    const data = await retrieve(id);

    return createView(requester, data);
}
