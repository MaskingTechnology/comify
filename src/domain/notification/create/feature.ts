
import logger from '^/integrations/logging/module';

import { Type } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(type: Type, senderId: string, receiverId: string, postId: string | undefined = undefined, reactionId: string | undefined = undefined): Promise<void>
{
    if (senderId === receiverId)
    {
        return;
    }

    const data = createData(type, senderId, receiverId, targetPostId, targetReactionId, sourceReactionId);

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
