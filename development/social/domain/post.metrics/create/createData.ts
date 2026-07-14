
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { BaseData } from '../definitions';

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
