
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function createRecord(type: string, senderId: string, receiverId: string, postId: string | undefined = undefined): Record
{
    return {
        id: generateId(),
        createdAt: new Date().toISOString(),
        type,
        senderId,
        receiverId,
        postId,
        deleted: false
    };
}
