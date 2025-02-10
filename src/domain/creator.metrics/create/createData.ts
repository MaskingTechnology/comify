
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(creatorId: string): DataModel
{
    return {
        id: generateId(),
        creatorId,
        posts: 0,
        followers: 0,
        following: 0,
        popularity: 0
    };
}
