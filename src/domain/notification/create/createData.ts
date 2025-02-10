
import { generateId } from '^/integrations/utilities/crypto';

import { DataModel } from '../types';

export default function createData(type: string, senderId: string, receiverId: string, postId: string | undefined = undefined): DataModel
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        type,
        senderId,
        receiverId,
        postId
    };
}
