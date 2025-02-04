
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(creatorId: string): DataModel
{
    return {
        id: generateId(),
        creatorId,
        postCount: 0,
        followerCount: 0,
        followingCount: 0,
        popularity: 0
    };
}
