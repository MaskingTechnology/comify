
import { type RelationKey, type Record } from '../definitions';

import createUnestablished from './createUnestablished';
import retrieveEstablished from './retrieveEstablished';

export default async function (key: RelationKey): Promise<Record>
{
    return await retrieveEstablished(key.followerId, key.followingId)
        ?? createUnestablished(key.followerId, key.followingId);
}
