
import logger from '@comify/common/integrations/logging';

import retrieve from './retrieve';
import remove from './remove';

export default async function run(postId: string): Promise<void>
{
    const records = await retrieve(postId);

    const ids = records.map(notification => notification.id);

    const succeeded = await remove(ids);

    if (succeeded === false)
    {
        logger.warn(`Not all notifications for post with id '${postId}' have been deleted.`);
    }
}
