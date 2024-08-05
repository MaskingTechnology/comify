
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';

import type { Types } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(requester: Requester, type: Types, receiverId: string, postId?: string, reactionId?: string): Promise<void>
{
    if (requester.id === receiverId)
    {
        return;
    }

    const data = createData(type, requester.id, receiverId, postId, reactionId);

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
