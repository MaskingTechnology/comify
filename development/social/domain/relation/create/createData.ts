
import { generateId } from '@comify/common/integrations/utilities/crypto';

import type { BaseData } from '../definitions';

export default function createData(followerId: string, followingId: string): DataModel
{
    return {
        id: generateId(),
        followerId,
        followingId
    };
}
