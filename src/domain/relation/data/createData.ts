
import { generateId } from '^/integrations/utilities/crypto';

import RelationData from './RelationData';

export default function createData(followerId: string, followingId: string): RelationData
{
    const id = generateId();

    return new RelationData(id, followerId, followingId);
}
