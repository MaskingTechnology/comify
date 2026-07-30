
import { type Record } from '../definitions';

import retrieveEstablished from './retrieveEstablished';
import createUnestablished from './createUnestablished';

export default async function (followerId: string, followingId: string): Promise<Record>
{
    return await retrieveEstablished(followerId, followingId)
        ?? createUnestablished(followerId, followingId);
}
