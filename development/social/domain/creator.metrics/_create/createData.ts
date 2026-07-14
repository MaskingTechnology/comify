
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(creatorId: string): Data
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
