
import logger from '^/integrations/logging/module';

import type { Requester } from '^/domain/authentication/types';
import type { Types } from '../definitions';
import createData from './createData';
import insertData from './insertData';

export default async function feature(requester: Requester, type: Types, receiverId: string, postId?: string, reactionId?: string): Promise<void>
{
    const data = createData(type, requester.id, receiverId, postId, reactionId);
    try
    {
        await insertData(data);
    }
    catch (error: unknown)
    {
        logger.logError('Failed to create notification', error);
    }
}
