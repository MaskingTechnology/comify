
import getNotifications from '../getByPostId';
import deleteData from '../remove';

export default async function removedPost(postId: string): Promise<Promise<void>[]>
{
    const notifications = await getNotifications(postId);

    return notifications.map(item => deleteData(item.id));
}
