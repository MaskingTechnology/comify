
import { type Identifier } from '@comify/common/primitives/identifier';
import generateId from '@comify/common/primitives/identifier/generate';

import { type Record, type Type } from '../definitions';

export default function (type: Type, senderId: Identifier, receiverId: Identifier, postId: Identifier | undefined = undefined): Record
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
