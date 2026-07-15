
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(followerId: string, followingId: string): Data
{
    return {
        id: generateId(),
        followerId,
        followingId
    };
}
