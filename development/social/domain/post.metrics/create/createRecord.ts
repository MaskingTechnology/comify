
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../definitions';

export default function (postId: string): Record
{
    return {
        id: generateId(),
        postId,
        ratings: 0,
        reactions: 0,
        popularity: 0
    };
}
