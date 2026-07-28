
import type { Type } from '../definitions';
import { logger } from '../integrations';

import createRecord from './createRecord';
import persist from './persist';

export default async function run(type: Type, senderId: string, receiverId: string, postId: string | undefined = undefined): Promise<void>
{
    if (senderId === receiverId)
    {
        return;
    }

    try
    {
        const record = createRecord(type, senderId, receiverId, postId);

        await persist(record);
    }
    catch (error)
    {
        // We want the notification system to be non-blocking.
        logger.error('Failed to create notification', error);
    }
}
