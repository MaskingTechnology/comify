
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Record } from '../../definitions';

export default function (followerId: string, followingId: string): Record
{
    return {
        id: generateId(),
        followerId,
        followingId
    };
}
