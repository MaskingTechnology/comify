
import type Requester from '../authentication/Requester';

import type NotificationView from './view/NotificationView';
import createView from './view/createView';
import retrieve from './data/retrieve';

export default async function get(id: string, requester?: Requester): Promise<NotificationView>
{
    const data = await retrieve(id);

    return createView(data);
}
