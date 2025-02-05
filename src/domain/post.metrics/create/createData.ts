
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(postId: string): DataModel
{
    return {
        id: generateId(),
        postId,
        ratings: 0,
        reactions: 0,
        popularity: 0
    };
}
