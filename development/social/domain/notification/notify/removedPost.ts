
import getNotifications from '../getByPostId';
import remove from '../remove';

export default async function removedPost(postId: string): Promise<void>
{
    const notifications = await getNotifications(postId);
    const promises = notifications.map(item => remove(item.id));

    await Promise.allSettled(promises);
}
