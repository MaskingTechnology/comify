
import logger from '^/integrations/logging/module';


import type { Types } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(creatorId: string, type: Types, receiverId: string, postId?: string, reactionId?: string): Promise<void>
{
    if (creatorId === receiverId)
    {
        return;
    }

    const data = createData(type, creatorId, receiverId, postId, reactionId);

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
