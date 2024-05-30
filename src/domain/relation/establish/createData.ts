
import { generateId } from '^/integrations/utilities/crypto';

import type { DataModel } from '../types';

export default function createData(followerId: string, followingId: string): DataModel
{
    const id = generateId();

    return { id, followerId, followingId };
}
