
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { Data } from '../definitions';

export default function createData(postId: string): Data
{
    return {
        id: generateId(),
        postId,
        ratings: 0,
        reactions: 0,
        popularity: 0
    };
}
