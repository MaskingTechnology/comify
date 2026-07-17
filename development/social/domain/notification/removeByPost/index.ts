
import retrieve from '../_retrieveByPostId';
import remove from '../_remove';

export default async function run(postId: string): Promise<void>
{
    const notifications = await retrieve(postId);
    const promises = notifications.map(item => remove(item.id));

    await Promise.allSettled(promises);
}
