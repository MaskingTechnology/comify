
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { BaseData } from '../definitions';

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
