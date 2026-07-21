
import logger from '@comify/common/integrations/logging';

import retrieve from './retrieve';
import persist from './persist';

export default async function run(postId: string): Promise<void>
{
    const notifications = await retrieve(postId);

    const ids = notifications.map(notification => notification.id);

    const succeeded = await persist(ids);

    if (succeeded === false)
    {
        logger.warn(`Not all notifications for post with id '${postId}' have been deleted.`);
    }
}
