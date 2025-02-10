
import logger from '^/integrations/logging';

import { Type } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(type: Type, senderId: string, receiverId: string, postId: string | undefined = undefined): Promise<void>
{
    if (senderId === receiverId)
    {
        return;
    }

    try
    {
        const data = createData(type, senderId, receiverId, postId);

        await insertData(data);
    }
    catch (error)
    {
        // We want the notification system to be non-blocking.
        logger.logError('Failed to create notification', error);
    }
}
