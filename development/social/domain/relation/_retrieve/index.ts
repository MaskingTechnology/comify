
import { type RelationKey, type Record } from '../definitions';

import retrieveEstablished from './retrieveEstablished';
import createUnestablished from './createUnestablished';

export default async function (key: RelationKey): Promise<Record>
{
    return await retrieveEstablished(key.followerId, key.followingId)
        ?? createUnestablished(key.followerId, key.followingId);
}
