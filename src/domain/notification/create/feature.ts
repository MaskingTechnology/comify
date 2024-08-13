
import logger from '^/integrations/logging/module';


import type { Types } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(type: Types, senderId: string, receiverId: string, postId?: string, reactionId?: string): Promise<void>
{
    if (senderId === receiverId)
    {
        return;
    }

    const data = createData(type, senderId, receiverId, postId, reactionId);

    try
    {
        await insertData(data);
    }
    catch (error: unknown)
    {
        // We want the notification system to be non-blocking.
        logger.logError('Failed to create notification', error);
    }
}
