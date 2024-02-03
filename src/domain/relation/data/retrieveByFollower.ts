
import type Requester from '../../authentication/Requester';

import type RelationData from './RelationData';

export default async function retrieveByFollower(followerId: string, requester?: Requester): Promise<RelationData[]>
{
    return [];
}
